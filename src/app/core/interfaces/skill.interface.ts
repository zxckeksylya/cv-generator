import { INameId } from './name-id.interface';

export interface Skill {
  id: string;
  name: string;
  category: INameId;
  experience: number;
  lastUsed: number;
  level: INameId;
}
