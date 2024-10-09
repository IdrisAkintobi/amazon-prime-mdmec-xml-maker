import { CategoryEnum } from '../src/types/enum/domain.enums';

export const mmcSampleData = {
    AudioTrackID: 'AudiTrackID01;AudiTrackID02',
    AudioType: 'Stereo;Mono',
    AudioLanguage: 'en-US;en-Us',
    AudioLocation: '/audio/001.wav;/audio/002.wav',
    AudioHash: 'hash1;hash2',
    VideoTrackID: 'VideoTrackID001;VideoTrackID002',
    VideoType: 'HDR;SDR',
    VideoLanguage: 'en-US;en-Us',
    VideoLocation: '/video/002;/video/002',
    VideoHash: 'vidhash1;vidhash2',
    AspectRatio: '16:9',
    WidthPixels: '1920',
    HeightPixels: '1080',
    Progressive: 'Yes',
    ProgressiveScanOrder: 'Top',
    SubtitleTrackID: 'SubtitleTrackID1;SubtitleTrackID2',
    SubtitleType: 'Closed;Unclosed',
    SubtitleLanguage: 'en-US;en-GB',
    SubtitleLocation: '/subtitles/001;/subtitle/002',
    SubtitleHash: 'subhash1;subhash2',
    SubtitleFrameRate: '23.976;24',
    SubtitleFrameRateMultiplier: '1001/1000;1000/1001',
    SubtitleFrameRateTimeCode: 'NonDrop;NonDrop',
    ImageID: 'ImageID0001;ImageID0002',
    ImagePurpose: 'Boxart;Cover',
    ImageLanguage: 'en-US;en-GB',
    ImageLocation: '/images/001;/images/002',
    PresentationID: 'PresentationID01',
    PresentationIDTrackNum: '01',
    PresentationIDVid: 'Vid01',
    PresentationIDAud: 'Aud01',
    PresentationIDSub: 'Sub01',
    PictureGroupID: 'PictureGroupID01',
    PictureGroupImageID: 'ImageID01;image02',
    ExperienceID: 'ExperienceID01',
    ExperienceType: 'Movie',
    ExperienceSubType: 'Trailer',
    ExperienceChildID: 'ChildID01',
    ExperienceChildRelationship: 'Trailer',
    ALID: 'ALID01',
    ALIDExperienceID: 'ExperienceID01',
};

export const mecSampleData = {
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
    'Cast:DisplayName': 'name1;name2||name-ja-JP1;name-ja-JP2',
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

export const imageOnlySampleData = {
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
