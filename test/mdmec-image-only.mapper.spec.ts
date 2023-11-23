// FILEPATH: /Users/mac/Documents/GitHub/wi-flix/mdmec-xml-converter/test/mappers/mdmec-image-only.mapper.test.ts
import { ImageOnlyMdMecMapper } from '../src/mappers/mdmec-image-only.mapper';
import { ImageOnlyParsedType } from '../src/types/image-only-parsed.type';

describe('ImageOnlyMdMecMapper', () => {
    let data: ImageOnlyParsedType;

    beforeEach(() => {
        data = {
            ContentID: 'content-id',
            ReleaseYear: '2022',
            WorkType: 'work-type',
            OrganizationID: 'org-id',
            OrganizationRole: 'org-role',
            ArtReference: 'ref1;ref2',
            'ArtReference:resolution': 'res1;res2',
            'ArtReference:purpose': 'pur1;pur2',
            'LocalizedInfo:language': 'en-US;es-ES',
            'Identifier:Namespace': 'ns1;ns2',
            Identifier: 'id1;id2',
        };
    });

    it('should map data to ImageOnly', () => {
        const result = ImageOnlyMdMecMapper.map(data);

        expect(result).toEqual({
            'mdmec:CoreMetadata': {
                '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                '@xmlns:md': 'http://www.movielabs.com/schema/md/v2.9/md',
                '@xmlns:mdmec': 'http://www.movielabs.com/schema/mdmec/v2.9',
                '@xsi:schemaLocation': 'http://www.movielabs.com/schema/mdmec/v2.9 ../mdmec-v2.9.xsd',
                'mdmec:Compatibility': {
                    'md:SpecVersion': '2.9',
                    'md:Profile': 'CM-IMAGE-1',
                },
                'mdmec:Basic': {
                    '@ContentID': data.ContentID,
                    'md:LocalizedInfo': [
                        {
                            '@language': 'en-US',
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
                        },
                        {
                            '@language': 'es-ES',
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
                        },
                    ],
                    'md:ReleaseYear': data['ReleaseYear'],
                    'md:WorkType': data['WorkType'],
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
                    'md:AssociatedOrg': {
                        '@organizationID': data['OrganizationID'],
                        '@role': data['OrganizationRole'],
                    },
                },
            },
        });
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Identifier arrays have different lengths', () => {
        data['Identifier:Namespace'] = 'ns1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrowError(
            'Identifier and Identifier:Namespace must have the same length',
        );
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference'] = 'ref1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:resolution arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:purpose arrays have different lengths', () => {
        data['ArtReference:purpose'] = 'pur1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrowError(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });
});
