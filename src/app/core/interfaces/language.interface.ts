import { INameId } from './name-id.interface';

export interface Language {
  name: string;
  id: string;
  everydayReadingLevel: INameId;
  everydayWritingLevel: INameId;
  everydaySpeakingLevel: INameId;
  professionalReadingLevel: INameId;
  professionalWritingLevel: INameId;
  professionalSpeakingLevel: INameId;
}

export interface LanguageMap {
  [id: string]: Language;
}

export interface CreateLanguage {
  name: string;
  everydayReadingLevel: string;
  everydayWritingLevel: string;
  everydaySpeakingLevel: string;
  professionalReadingLevel: string;
  professionalWritingLevel: string;
  professionalSpeakingLevel: string;
}

export interface CreateLanguageResponse extends CreateLanguage {
  id: string;
}

export interface UpdateLanguage {
  id: string;
  name: string;
  everydayReadingLevel: string;
  everydayWritingLevel: string;
  everydaySpeakingLevel: string;
  professionalReadingLevel: string;
  professionalWritingLevel: string;
  professionalSpeakingLevel: string;
}
