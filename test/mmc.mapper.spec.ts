import { MMCMapper } from '../src/mappers/mmc.mapper';
import { mmcParsedType } from '../src/types/mmc-parsed.type';
import { mmcSampleData } from './sample-data';
import { mmcSampleOutput } from './sample.output';

describe('MMCMapper', () => {
    let data: mmcParsedType;

    beforeEach(() => {
        // Initialize data with some default values
        data = { ...mmcSampleData };
    });

    it('should map data to MECType', () => {
        const result = MMCMapper.map(data);

        expect(result).toEqual(mmcSampleOutput);
    });

    it('should throw error when ExperienceID array and PresentationID array have different lengths', () => {
        data.PresentationID = 'presentationId1||presentationId2';
        expect(() => MMCMapper.map(data)).toThrow('ExperienceID and PresentationID must be of the same length');
    });

    it('mapExperience - should throw error when ExperienceID, ExperienceType, and ExperienceSubType arrays have different lengths', () => {
        data.ExperienceID = 'experienceId1;experienceId12';
        expect(() => MMCMapper.map(data)).toThrow(
            'ExperienceID, ExperienceType, and ExperienceSubType, must have the same length',
        );
    });

    it('mapALIDExperience - should throw error when ALID and ALIDExperienceID arrays have different lengths', () => {
        data.ALID = 'alid1;alid2';
        expect(() => MMCMapper.map(data)).toThrow('ALID and ALIDExperienceID must have the same length');
    });

    it('mapPictureGroup - should throw error when PictureGroupID, PictureGroupPictureID, and PictureGroupImageID arrays have different lengths', () => {
        data.PictureGroupID = 'pictureGroupIDs1||pictureGroupIDs2';
        expect(() => MMCMapper.map(data)).toThrow(
            'PictureGroupID, PictureGroupPictureID, and PictureGroupImageID, must have the same length',
        );
    });

    it('mapPresentations - should throw error when PresentationID, PresentationIDTrackNum, PresentationIDVid, presentationIDAud, and presentationIDSub arrays have different lengths', () => {
        data.PresentationIDTrackNum = '1||2';
        expect(() => MMCMapper.map(data)).toThrow(
            'PresentationID, PresentationIDTrackNum, PresentationIDVid, presentationIDAud, and presentationIDSub must have the same length',
        );
    });

    it('mapSubtitles - should throw error when SubtitleTrackID, SubtitleType, SubtitleLanguage, SubtitleLocation, SubtitleFrameRateMultiplier, SubtitleFrameRate, and SubtitleFrameRateTimeCode arrays have different lengths', () => {
        data.SubtitleTrackID = 'subtitleTrackID1;subtitleTrackID2;subtitleTrackID3';
        expect(() => MMCMapper.map(data)).toThrow(
            'SubtitleTrackID, SubtitleType, SubtitleLanguage, SubtitleLocation, SubtitleFrameRateMultiplier, SubtitleFrameRate, and SubtitleFrameRateTimeCode  must have the same length',
        );
    });

    it('mapImages - should throw error when ImageID, ImagePurpose, ImageLanguage, and ImageLocation arrays have different lengths', () => {
        data.ImageID = 'ImageID ';
        expect(() => MMCMapper.map(data)).toThrow(
            'ImageID, ImagePurpose, ImageLanguage, and ImageLocation must have the same length',
        );
    });

    it('mapAudios - should throw error when AudioTrackID, AudioType, AudioLanguage, and AudioLocation arrays have different lengths', () => {
        data.AudioTrackID = 'AudioTrackID1;AudioTrackID2;AudioTrackID3';
        expect(() => MMCMapper.map(data)).toThrow(
            'AudioTrackID, AudioType, AudioLanguage, and AudioLocation must have the same length',
        );
    });

    it('mapVideos - should throw error when VideoTrackID, VideoType, VideoLanguage, and VideoLocation arrays have different lengths', () => {
        data.VideoTrackID = 'VideoTrackID';
        expect(() => MMCMapper.map(data)).toThrow(
            'VideoTrackID, VideoType, VideoLanguage, and VideoLocation must have the same length',
        );
    });

    it('mapVideos - should throw error when HeightPixels, WidthPixels, and AspectRatio arrays have different lengths', () => {
        data.WidthPixels = '1920;1920';
        expect(() => MMCMapper.map(data)).toThrow(
            'HeightPixels, WidthPixels, and AspectRatio, must have the same length',
        );
    });
});
