import { ImageOnlyMdMecMapper } from '../mappers/mdmec-image-only.mapper';
import { MECMapper } from '../mappers/mec.mapper';
import { MMCMapper } from '../mappers/mmc.mapper';
import { ImageOnlyParsedType } from '../types/image-only-parsed.type';
import { mecParsedType } from '../types/mec-parsed.type';
import { mmcParsedType } from '../types/mmc-parsed.type';
import { validateXML, xmlBuilder, xmlPrefix } from './xml.builder';

export const dataToMECXml = (data: mecParsedType): string => {
    const objData = MECMapper.map(data);
    const xmlData = xmlPrefix + xmlBuilder.build(objData);

    // validate xml and return xmlData if valid
    return validateXML(xmlData) ? xmlData : null;
};

export const dataToMMCXml = (data: mmcParsedType): string => {
    const objData = MMCMapper.map(data);
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
