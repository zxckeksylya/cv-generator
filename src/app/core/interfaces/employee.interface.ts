import { Language } from './language.interface';
import { INameId } from './name-id.interface';
import { Skill } from './skill.interface';

export interface GetEmployee {
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

export interface EmployeeMap {
  [id: string]: GetEmployee;
}
