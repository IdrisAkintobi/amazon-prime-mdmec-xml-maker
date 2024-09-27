import { MECMapper } from '../src/mappers/mec.mapper';
import { mecParsedType } from '../src/types/mec-parsed.type';
import { mecSampleData } from './sample-data';
import { mecSampleOutput } from './sample.output';

describe('MECMapper', () => {
    let data: mecParsedType;

    beforeEach(() => {
        // Initialize data with some default values
        data = { ...mecSampleData };
    });

    it('should map data to MECType', () => {
        const result = MECMapper.map(data);

        // Add your expectations here
        expect(result).toEqual(mecSampleOutput);
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => MECMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Identifier arrays have different lengths', () => {
        data['Identifier:Namespace'] = 'ns1';
        expect(() => MECMapper.map(data)).toThrow('Identifier and Identifier:Namespace must have the same length');
    });

    it('should throw error when Cast arrays have different lengths', () => {
        data['Cast:DisplayName'] = 'name1';
        expect(() => MECMapper.map(data)).toThrow('DisplayNames in different language must have the same length');
    });

    it('should throw error when Cast:BillingBlockOrder arrays have different lengths', () => {
        data['Cast:BillingBlockOrder'] = '1';
        expect(() => MECMapper.map(data)).toThrow('JobFunction, BillingBlockOrder arrays must have the same length');
    });

    it('should throw error when ArtReference arrays have different lengths', () => {
        data['ArtReference'] = 'ref1';
        expect(() => MECMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:resolution arrays have different lengths', () => {
        data['ArtReference:resolution'] = 'res1';
        expect(() => MECMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when ArtReference:purpose arrays have different lengths', () => {
        data['ArtReference:purpose'] = 'pur1';
        expect(() => MECMapper.map(data)).toThrow(
            'ArtReference, ArtReference:resolution and, ArtReference:purpose arrays must have the same length',
        );
    });

    it('should throw error when Cast:JobFunction arrays have different lengths', () => {
        data['Cast:JobFunction'] = 'job-function1';
        expect(() => MECMapper.map(data)).toThrow('JobFunction, BillingBlockOrder arrays must have the same length');
    });
});
