import { Skill } from './skill.interface';
import { Language } from './language.interface';
import { INameId } from './name-id.interface';

export interface User {
  skills: Skill[];
  languages: Language[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: INameId;
  id: string;
}
