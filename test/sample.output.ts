export const mecSampleOutput = {
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
                        { '@resolution': 'res1', '@purpose': 'pur1', $: 'ref1' },
                        { '@resolution': 'res2', '@purpose': 'pur2', $: 'ref2' },
                    ],
                    'md:Summary190': 'summary-190',
                    'md:Summary400': 'summary-400',
                    'md:Genre': [{ '@id': 'av_genre_genre1' }, { '@id': 'av_genre_genre2' }],
                },
            ],
            'md:ReleaseYear': '2022',
            'md:ReleaseDate': '2022-01-01',
            'md:ReleaseHistory': [
                {
                    'md:ReleaseType': 'Cinema',
                    'md:DistrTerritory': { 'md:country': 'release-history-country' },
                    'md:Date': '2022-01-01',
                },
            ],
            'md:WorkType': 'work-type',
            'md:AltIdentifier': [
                { 'md:Namespace': 'ns1', 'md:Identifier': 'id1' },
                { 'md:Namespace': 'ns2', 'md:Identifier': 'id2' },
            ],
            'md:RatingSet': { 'md:NotRated': 'true' },
            'md:People': [
                {
                    'md:Job': { 'md:JobFunction': 'job-function1', 'md:BillingBlockOrder': '1' },
                    'md:Name': {
                        'md:DisplayName': [
                            { '@language': 'en-US', $: 'name1' },
                            { '@language': 'ja-JP', $: 'name-ja-JP1' },
                        ],
                    },
                },
                {
                    'md:Job': { 'md:JobFunction': 'job-function2', 'md:BillingBlockOrder': '2' },
                    'md:Name': {
                        'md:DisplayName': [
                            { '@language': 'en-US', $: 'name2' },
                            { '@language': 'ja-JP', $: 'name-ja-JP2' },
                        ],
                    },
                },
            ],
            'md:OriginalLanguage': 'en-US',
            'md:AssociatedOrg': { '@organizationID': 'org-id', '@role': 'org-role' },
            'md:SequenceInfo': { 'md:Number': '1' },
            'md:Parent': { '@relationshipType': 'isseasonof', 'md:ParentContentID': 'parent-content-id' },
        },
        'mdmec:CompanyDisplayCredit': { 'md:DisplayString': { '@language': 'en-US', $: 'company-display-credit' } },
    },
};

export const imageOnlySampleOutput = {
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
            '@ContentID': 'content-id',
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
            'md:ReleaseYear': '2022',
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
            'md:AssociatedOrg': {
                '@organizationID': 'org-id',
                '@role': 'org-role',
            },
        },
    },
};

export const mmcSampleOutput = {
    'manifest:MediaManifest': {
        '@xmlns:manifest': 'http://www.movielabs.com/schema/manifest/v1.10/manifest',
        '@xmlns:md': 'http://www.movielabs.com/schema/md/v2.9/md',
        '@xmlns:xs': 'http://www.w3.org/2001/XMLSchema',
        '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        '@xsi:schemaLocation': 'http://www.movielabs.com/schema/manifest/v1.10/manifest manifest-v1.10.xsd',
        'manifest:Compatibility': { 'manifest:SpecVersion': '1.10', 'manifest:Profile': 'MMC-1' },
        'manifest:Inventory': {
            'manifest:Audio': [
                {
                    '@AudioTrackID': 'AudiTrackID01',
                    'md:Type': 'Stereo',
                    'md:Language': 'en-US',
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/audio/001.wav',
                        'manifest:Hash': { '@method': 'MD5', $: 'hash1' },
                    },
                },
                {
                    '@AudioTrackID': 'AudiTrackID02',
                    'md:Type': 'Mono',
                    'md:Language': 'en-Us',
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/audio/002.wav',
                        'manifest:Hash': { '@method': 'MD5', $: 'hash2' },
                    },
                },
            ],
            'manifest:Video': [
                {
                    '@VideoTrackID': 'VideoTrackID001',
                    'md:Type': 'HDR',
                    'md:Language': 'en-US',
                    'md:Picture': {
                        'md:HeightPixels': '1080',
                        'md:WidthPixels': '1920',
                        'md:AspectRatio': '16:9',
                        '@scanOrder': 'Top',
                        'md:Progressive': 'Yes',
                    },
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/video/002',
                        'manifest:Hash': { '@method': 'MD5', $: 'vidhash1' },
                    },
                },
                {
                    '@VideoTrackID': 'VideoTrackID002',
                    'md:Type': 'SDR',
                    'md:Language': 'en-Us',
                    'md:Picture': {},
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/video/002',
                        'manifest:Hash': { '@method': 'MD5', $: 'vidhash2' },
                    },
                },
            ],
            'manifest:Image': [
                {
                    '@ImageID': 'ImageID0001',
                    'md:Purpose': 'Boxart',
                    'md:Language': 'en-US',
                    'manifest:ContainerReference': { 'manifest:ContainerLocation': '/images/001' },
                },
                {
                    '@ImageID': 'ImageID0002',
                    'md:Purpose': 'Cover',
                    'md:Language': 'en-GB',
                    'manifest:ContainerReference': { 'manifest:ContainerLocation': '/images/002' },
                },
            ],
            'manifest:Subtitle': [
                {
                    '@SubtitleTrackID': 'SubtitleTrackID1',
                    'md:Type': 'Closed',
                    'md:Language': 'en-US',
                    'md:Encoding': {
                        'md:FrameRate': { '@multiplier': '1001/1000', '@timecode': 'NonDrop', $: '23.976' },
                    },
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/subtitles/001',
                        'manifest:Hash': { '@method': 'MD5', $: 'subhash1' },
                    },
                },
                {
                    '@SubtitleTrackID': 'SubtitleTrackID2',
                    'md:Type': 'Unclosed',
                    'md:Language': 'en-GB',
                    'md:Encoding': {
                        'md:FrameRate': { '@multiplier': '1000/1001', '@timecode': 'NonDrop', $: '24' },
                    },
                    'manifest:ContainerReference': {
                        'manifest:ContainerLocation': '/subtitle/002',
                        'manifest:Hash': { '@method': 'MD5', $: 'subhash2' },
                    },
                },
            ],
        },
        'manifest:Presentations': {
            'manifest:Presentation': [
                {
                    '@PresentationID': 'PresentationID01',
                    'manifest:TrackMetadata': {
                        'manifest:TrackSelectionNumber': '01',
                        'manifest:VideoTrackReference': [{ 'manifest:VideoTrackID': 'Vid01' }],
                        'manifest:AudioTrackReference': [{ 'manifest:AudioTrackID': 'Aud01' }],
                        'manifest:SubtitleTrackReference': [{ 'manifest:SubtitleTrackID': 'Sub01' }],
                    },
                },
            ],
        },
        'manifest:PictureGroups': [
            {
                '@PictureGroupID': 'PictureGroupID01',
                'manifest:Picture': {
                    'manifest:ImageID': [{ $: 'ImageID01' }, { $: 'image02' }],
                },
            },
        ],
        'manifest:Experiences': [
            {
                'manifest:Experience': {
                    '@ExperienceID': 'ExperienceID01',
                    'manifest:Audiovisual': {
                        'manifest:Type': 'Movie',
                        'manifest:SubType': 'Trailer',
                        'manifest:PresentationID': 'PresentationID01',
                    },
                    'manifest:PictureGroupID': 'PictureGroupID01',
                    'manifest:ExperienceChild': [
                        { 'manifest:Relationship': 'Trailer', 'manifest:ExperienceID': 'ChildID01' },
                    ],
                },
            },
        ],
        'manifest:ALIDExperienceMaps': {
            'manifest:ALIDExperienceMap': [{ 'manifest:ALID': 'ALID01', 'manifest:ExperienceID': 'ExperienceID01' }],
        },
    },
};
