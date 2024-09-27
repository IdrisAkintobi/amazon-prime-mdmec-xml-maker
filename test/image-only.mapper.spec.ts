import { ImageOnlyMdMecMapper } from '../src/mappers/mdmec-image-only.mapper';
import { ImageOnlyParsedType } from '../src/types/image-only-parsed.type';
import { imageOnlySampleData } from './sample-data';
import { imageOnlySampleOutput } from './sample.output';

describe('ImageOnlyMdMecMapper', () => {
    let data: ImageOnlyParsedType;

    beforeEach(() => {
        data = { ...imageOnlySampleData };
    });

    it('should map data to ImageOnly', () => {
        const result = ImageOnlyMdMecMapper.map(data);

        expect(result).toEqual(imageOnlySampleOutput);
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Identifier arrays have different lengths', () => {
        data['Identifier:Namespace'] = 'ns1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrow(
            'Identifier and Identifier:Namespace must have the same length',
        );
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference'] = 'ref1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:resolution arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:purpose arrays have different lengths', () => {
        data['ArtReference:purpose'] = 'pur1';
        expect(() => ImageOnlyMdMecMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });
});
