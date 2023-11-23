import { MdMecMapper } from '../src/mappers/mdmec.mapper';
import { CategoryEnum } from '../src/types/enum/domain.enums';
import { ParsedType } from '../src/types/parsed.type';

describe('MdMecMapper', () => {
    let data: ParsedType;

    beforeEach(() => {
        // Initialize data with some default values
        data = {
            ContentID: 'content-id',
            TitleDisplay: 'title-display',
            TitleSort: 'title-sort',
            Summary190: 'summary-190',
            Summary400: 'summary-400',
            ArtReference: 'ref1;ref2',
            'ArtReference:resolution': 'res1;res2',
            'ArtReference:purpose': 'pur1;pur2',
            Genre: 'genre1;genre2',
            ReleaseYear: '2022',
            ReleaseDate: '2022-01-01',
            WorkType: 'work-type',
            OrganizationID: 'org-id',
            OrganizationRole: 'org-role',
            'LocalizedInfo:language': 'en-US',
            'Identifier:Namespace': 'ns1;ns2',
            Identifier: 'id1;id2',
            'Cast:BillingBlockOrder': '1;2',
            'Cast:DisplayName:language': 'en-US;ja-JP',
            'Cast:DisplayName': 'name1;name2',
            'Cast:DisplayName:ja-JP': 'name1;name2',
            OriginalLanguage: 'en-US',
            CompanyDisplayCredit: 'company-display-credit',
            'CompanyDisplayCredit:language': 'en-US',
            Category: CategoryEnum.Season,
            SequenceNumber: '1',
            ParentContentID: 'parent-content-id',
            'Cast:JobFunction': 'job-function1;job-function2',
            Rating: 'rating',
            'Rating:Country': 'rating-country',
            'Rating:System': 'rating-system',
            'Rating:Value': 'rating-value',
            'ReleaseHistory:Type': 'Cinema',
            'ReleaseHistory:Country': 'release-history-country',
            'ReleaseHistory:Date': '2022-01-01',
        };
    });

    it('should map data to FeatureType', () => {
        const result = MdMecMapper.map(data);

        // Add your expectations here
        expect(result).toEqual({
            'mdmec:CoreMetadata': {
                '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                '@xmlns:md': 'http://www.movielabs.com/schema/md/v2.9/md',
                '@xmlns:mdmec': 'http://www.movielabs.com/schema/mdmec/v2.9',
                '@xsi:schemaLocation': 'http://www.movielabs.com/schema/mdmec/v2.9 ../mdmec-v2.9.xsd',
                'mdmec:Basic': {
                    '@ContentID': 'content-id',
                    'md:LocalizedInfo': [
                        {
                            '@language': 'en-US',
                            'md:TitleDisplayUnlimited': 'title-display',
                            'md:TitleSort': 'title-sort',
                            'md:ArtReference': [
                                {
                                    '@resolution': 'res1',
                                    '@purpose': 'pur1',
                                    $: 'ref1',
                                },
                                {
                                    '@resolution': 'res2',
                                    '@purpose': 'pur2',
                                    $: 'ref2',
                                },
                            ],
                            'md:Summary190': 'summary-190',
                            'md:Summary400': 'summary-400',
                            'md:Genre': [
                                {
                                    '@id': 'av_genre_genre1',
                                },
                                {
                                    '@id': 'av_genre_genre2',
                                },
                            ],
                        },
                    ],
                    'md:ReleaseYear': '2022',
                    'md:ReleaseDate': '2022-01-01',
                    'md:ReleaseHistory': [
                        {
                            'md:ReleaseType': 'Cinema',
                            'md:DistrTerritory': {
                                'md:country': 'release-history-country',
                            },
                            'md:Date': '2022-01-01',
                        },
                    ],
                    'md:WorkType': 'work-type',
                    'md:AltIdentifier': [
                        {
                            'md:Namespace': 'ns1',
                            'md:Identifier': 'id1',
                        },
                        {
                            'md:Namespace': 'ns2',
                            'md:Identifier': 'id2',
                        },
                    ],
                    'md:notrated': 'true',
                    'md:People': [
                        {
                            'md:Job': {
                                'md:JobFunction': 'job-function1',
                                'md:BillingBlockOrder': '1',
                            },
                            'md:Name': {
                                'md:DisplayName': [
                                    {
                                        '@language': 'en-US',
                                        $: 'name1',
                                    },
                                    {
                                        '@language': 'ja-JP',
                                        $: 'name1',
                                    },
                                ],
                            },
                        },
                        {
                            'md:Job': {
                                'md:JobFunction': 'job-function2',
                                'md:BillingBlockOrder': '2',
                            },
                            'md:Name': {
                                'md:DisplayName': [
                                    {
                                        '@language': 'en-US',
                                        $: 'name2',
                                    },
                                    {
                                        '@language': 'ja-JP',
                                        $: 'name2',
                                    },
                                ],
                            },
                        },
                    ],
                    'md:OriginalLanguage': 'en-US',
                    'md:AssociatedOrg': {
                        '@organizationID': 'org-id',
                        '@role': 'org-role',
                    },
                    'md:SequenceInfo': {
                        'md:Number': '1',
                    },
                    'md:Parent': {
                        '@relationshipType': 'isseasonof',
                        'md:ParentContentID': 'parent-content-id',
                    },
                },
                'mdmec:CompanyDisplayCredit': {
                    'md:DisplayString': {
                        '@language': 'en-US',
                        $: 'company-display-credit',
                    },
                },
            },
        });
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Identifier arrays have different lengths', () => {
        data['Identifier:Namespace'] = 'ns1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'Identifier and Identifier:Namespace must have the same length',
        );
    });

    it('should throw error when Cast arrays have different lengths', () => {
        data['Cast:DisplayName'] = 'name1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'DisplayNames in different language must have the same length',
        );
    });

    it('should throw error when Cast:BillingBlockOrder arrays have different lengths', () => {
        data['Cast:BillingBlockOrder'] = '1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'JobFunction, BillingBlockOrder arrays must have the same length',
        );
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference'] = 'ref1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:resolution arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:purpose arrays have different lengths', () => {
        data['ArtReference:purpose'] = 'pur1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Cast:JobFunction arrays have different lengths', () => {
        data['Cast:JobFunction'] = 'job-function1';
        expect(() => MdMecMapper.map(data)).toThrowError(
            'JobFunction, BillingBlockOrder arrays must have the same length',
        );
    });
});
