import { CategoryEnum, RelationshipTypeEnum } from '../types/enum/domain.enums';
import { mecParsedType } from '../types/mec-parsed.type';
import {
    MdAltIdentifier,
    MdArtReference,
    MdDisplay,
    MdGenre,
    MdLocalizedInfo,
    MdParent,
    MdPerson,
    MdRating,
    MdReleaseHistory,
    MdSequenceInfo,
    MECSchemaType,
} from '../types/mec-schema.type';

const MAX_GENRE = 3;
export class MECMapper {
    static map(data: mecParsedType): MECSchemaType {
        const useRating = data['Rating'].toLowerCase() === 'yes';
        const category = data['Category'];

        // check if it is an episode or season
        const requireSequence = category === CategoryEnum.Episode || category === CategoryEnum.Season;

        const mecSchema: MECSchemaType = {
            'mdmec:CoreMetadata': {
                '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                '@xmlns:md': 'http://www.movielabs.com/schema/md/v2.9/md',
                '@xmlns:mdmec': 'http://www.movielabs.com/schema/mdmec/v2.9',
                '@xsi:schemaLocation': 'http://www.movielabs.com/schema/mdmec/v2.9 ../mdmec-v2.9.xsd',
                'mdmec:Basic': {
                    '@ContentID': data.ContentID,
                    'md:LocalizedInfo': this.mapLocalizedInfo(data),
                    'md:ReleaseYear': data['ReleaseYear'],

                    'md:ReleaseDate': data['ReleaseDate'],
                    'md:ReleaseHistory': this.mapReleaseHistory(data),
                    'md:WorkType': data['WorkType'],
                    'md:AltIdentifier': this.mapAltIdentifier(data),
                    'md:RatingSet': useRating
                        ? {
                              'md:Rating': this.mapRating(data),
                          }
                        : { 'md:NotRated': 'true' },
                    'md:People': this.mapPeople(data),
                    'md:OriginalLanguage': data['OriginalLanguage'],
                    'md:AssociatedOrg': {
                        '@organizationID': data['OrganizationID'],
                        '@role': data['OrganizationRole'],
                    },
                    ...(requireSequence && this.mapCategory(data, category)),
                },
                'mdmec:CompanyDisplayCredit': {
                    'md:DisplayString': {
                        '@language': data['CompanyDisplayCredit:language'],
                        $: data['CompanyDisplayCredit'],
                    },
                },
            },
        };

        return mecSchema;
    }

    private static mapCategory(
        data: mecParsedType,
        category: CategoryEnum,
    ): {
        'md:SequenceInfo': MdSequenceInfo;
        'md:Parent': MdParent;
    } {
        const sequenceNumber = data['SequenceNumber'];
        const parentContentID = data['ParentContentID'];

        if (!sequenceNumber || !parentContentID) {
            console.log({ sequenceNumber, parentContentID });
            throw new Error('SequenceNumber and ParentContentID must be provided for Episode and Season');
        }

        return {
            'md:SequenceInfo': {
                'md:Number': sequenceNumber,
            },
            'md:Parent': {
                '@relationshipType': RelationshipTypeEnum[category],
                'md:ParentContentID': parentContentID,
            },
        };
    }

    private static mapArtReference(data: mecParsedType): MdArtReference[] {
        const reference = data['ArtReference'].split(';');
        const resolution = data['ArtReference:resolution'].split(';');
        const purpose = data['ArtReference:purpose'].split(';');

        // check if all arrays have the same length
        if (reference.length !== resolution.length || reference.length !== purpose.length) {
            console.log({ reference, resolution, purpose });
            throw new Error(
                'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
            );
        }

        const artReference = [];

        for (let i = 0; i < reference.length; i++) {
            artReference.push({
                '@resolution': resolution[i]?.trim(),
                '@purpose': purpose[i]?.trim(),
                $: reference[i]?.trim(),
            });
        }

        return artReference;
    }

    private static mapGenre(data: mecParsedType): MdGenre[] {
        if (!data['Genre']) {
            throw new Error('Genre can not be empty');
        }
        const [allGenres, allSubGenres] = data['Genre'].split('||');
        const genres = allGenres.split(';');
        const subGenres = allSubGenres?.split(';');

        const genreArray = [];
        let genreCount = 0;

        for (let i = 0; i < MAX_GENRE; i++) {
            if (genreCount >= MAX_GENRE) break;
            if (genres[i]) {
                genreArray.push({
                    '@id': `av_genre_${genres[i]?.trim()}`,
                });
                genreCount++;
            }
            if (subGenres && subGenres[i]) {
                genreArray.push({
                    '@id': `av_subgenre_${subGenres[i]?.trim()}`,
                });
                genreCount++;
            }
        }

        return genreArray;
    }

    private static mapLocalizedInfo(data: mecParsedType): MdLocalizedInfo[] {
        const languages = data['LocalizedInfo:language'].split(';');
        const titleDisplay = data['TitleDisplay'].split(';');
        const titleSort = data['TitleSort'].split(';');
        const summary400 = data['Summary400'].split(';');
        const summary190 = data['Summary190'].split(';');

        // check if all arrays have the same length
        if (languages.length !== titleDisplay.length || languages.length !== summary400.length) {
            console.log({ languages, titleDisplay, summary400 });
            throw new Error('LocalizedInfo:language, TitleDisplay and, md:Summary400, must have the same length');
        }

        //NOTE  us-EN is the default language. Must be the first element of the array

        const localizedInfo = [];

        for (let i = 0; i < languages.length; i++) {
            localizedInfo.push({
                '@language': languages[i],
                'md:TitleDisplayUnlimited': titleDisplay[i],
                ...(data['TitleSort'] && { 'md:TitleSort': titleSort[i]?.trim() }),
                ...(i === 0 && data.ArtReference && { ['md:ArtReference']: this.mapArtReference(data) }),
                ...(data['Summary190'] && { 'md:Summary190': summary190[i]?.trim() }),
                ...(data['Summary400'] && { 'md:Summary400': summary400[i]?.trim() }),
                ...(i === 0 && { ['md:Genre']: this.mapGenre(data) }),
            });
        }

        return localizedInfo;
    }

    private static mapReleaseHistory(data: mecParsedType): MdReleaseHistory[] {
        const releaseType = data['ReleaseHistory:Type'].split(';');
        const country = data['ReleaseHistory:Country'].split(';');
        const date = data['ReleaseHistory:Date'].split(';');

        // check if all arrays have the same length
        if (releaseType.length !== country.length || releaseType.length !== date.length) {
            console.log({ releaseType, country, date });
            throw new Error(
                'ReleaseHistory:Type, ReleaseHistory:Country and, ReleaseHistory:Date arrays must have the same length',
            );
        }

        //NOTE Provide as much release history as possible.

        const releaseHistory = [];

        for (let i = 0; i < releaseType.length; i++) {
            releaseHistory.push({
                'md:ReleaseType': releaseType[i]?.trim(),
                'md:DistrTerritory': { 'md:country': country[i]?.trim() },
                'md:Date': date[i]?.trim(),
            });
        }

        return releaseHistory;
    }

    private static mapAltIdentifier(data: mecParsedType): MdAltIdentifier[] {
        const namespace = data['Identifier:Namespace'].split(';');
        const identifier = data['Identifier'].split(';');

        // check if all arrays have the same length
        if (namespace.length !== identifier.length) {
            console.log({ namespace, identifier });
            throw new Error('Identifier and Identifier:Namespace must have the same length');
        }

        const altIdentifier = [];

        for (let i = 0; i < namespace.length; i++) {
            altIdentifier.push({
                'md:Namespace': namespace[i]?.trim(),
                'md:Identifier': identifier[i]?.trim(),
            });
        }

        return altIdentifier;
    }

    private static mapRating(data: mecParsedType): MdRating[] {
        const country = data['Rating:Country'].split(';');
        const system = data['Rating:System'].split(';');
        const value = data['Rating:Value'].split(';');

        // check if all arrays have the same length
        if (country.length !== system.length || country.length !== value.length) {
            console.log({ country, system, value });
            throw new Error('Rating:Country, Rating:System and, Rating:Value arrays must have the same length');
        }

        const rating = [];

        for (let i = 0; i < country.length; i++) {
            rating.push({
                'md:Region': {
                    'md:country': country[i]?.trim(),
                },
                'md:System': system[i]?.trim(),
                'md:Value': value[i]?.trim(),
            });
        }

        return rating;
    }

    private static mapPeopleDisplayNames(displayNameObj, currIndex: number): MdDisplay[] {
        const peopleDisplayNames = [];

        for (const lang in displayNameObj) {
            peopleDisplayNames.push({
                '@language': lang,
                $: displayNameObj[lang][currIndex]?.trim(),
            });
        }

        return peopleDisplayNames;
    }

    private static mapPeople(data: mecParsedType): MdPerson[] {
        const displayNameLanguages = data['Cast:DisplayName:language'].split(';');
        const displayNames = data['Cast:DisplayName'].split('||');
        const jobFunction = data['Cast:JobFunction'].split(';');
        const billingBlockOrder = data['Cast:BillingBlockOrder'].split(';');

        if (displayNameLanguages.length !== displayNames.length) {
            console.log({ displayNameLanguages, displayNames });
            throw new Error('displayNames and displayNameLanguages separated by "||" must be of the same length');
        }

        // check if all arrays have the same length
        if (jobFunction.length !== billingBlockOrder.length) {
            console.log({ jobFunction, billingBlockOrder });
            throw new Error('JobFunction, BillingBlockOrder, and Cast:DisplayName arrays must have the same length');
        }

        const displayNameObj = displayNameLanguages.reduce((acc, item, index) => {
            acc[item] = displayNames[index].split(';');
            return acc;
        }, {});

        const people = [];

        for (let i = 0; i < jobFunction.length; i++) {
            people.push({
                'md:Job': {
                    'md:JobFunction': jobFunction[i]?.trim(),
                    'md:BillingBlockOrder': billingBlockOrder[i]?.trim(),
                },
                'md:Name': {
                    'md:DisplayName': this.mapPeopleDisplayNames(displayNameObj, i),
                },
            });
        }

        return people;
    }
}
