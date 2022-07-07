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
