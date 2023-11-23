import { ImageOnlyMdMecMapper } from '../mappers/mdmec-image-only.mapper';
import { MdMecMapper } from '../mappers/mdmec.mapper';
import { ImageOnlyParsedType } from '../types/image-only-parsed.type';
import { ParsedType } from '../types/parsed.type';
import { validateXML, xmlBuilder, xmlPrefix } from './xml.builder';

export const dataToMdmecXml = (data: ParsedType): string => {
    const objData = MdMecMapper.map(data);
    const xmlData = xmlPrefix + xmlBuilder.build(objData);

    // validate xml and return xmlData if valid
    return validateXML(xmlData) ? xmlData : null;
};

export const dataToImageOnlyXml = (data: ImageOnlyParsedType): string => {
    const objData = ImageOnlyMdMecMapper.map(data);
    const xmlData = xmlPrefix + xmlBuilder.build(objData);

    // validate xml and return xmlData if valid
    return validateXML(xmlData) ? xmlData : null;
};
