import { CategoryEnum } from './enum/domain.enums';

export type ParsedType = {
    ContentID: string;
    'LocalizedInfo:language': string;
    TitleDisplay: string;
    TitleSort: string;
    Summary190: string;
    Summary400: string;
    ArtReference: string;
    'ArtReference:resolution': string;
    'ArtReference:purpose': string;
    Genre: string;
    ReleaseYear: string;
    ReleaseDate: string;
    'ReleaseHistory:Type': string;
    'ReleaseHistory:Country': string;
    'ReleaseHistory:Date': string;
    WorkType: string;
    'Identifier:Namespace': string;
    Identifier: string;
    Rating: string;
    'Rating:Country': string;
    'Rating:System': string;
    'Rating:Value': string;
    'Cast:JobFunction': string;
    'Cast:BillingBlockOrder': string;
    'Cast:DisplayName:language': string;
    'Cast:DisplayName': string;
    'Cast:DisplayName:ja-JP': string;
    OriginalLanguage: string;
    OrganizationID: string;
    OrganizationRole: string;
    CompanyDisplayCredit: string;
    'CompanyDisplayCredit:language': string;
    Category: CategoryEnum;
    SequenceNumber: string;
    ParentContentID: string;
};