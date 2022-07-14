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

export interface UpdateEmployee {
  skills: string[];
  languages: string[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  id: string;
}

export interface CreateEmployee extends UpdateEmployee {
  password: string;
}

export interface CreateEmployeeResponse {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  skills: string[];
  role: string;
  department: string;
  languages: string[];
}

export interface EmployeeForm {
  skills: Skill[];
  languages: Language[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  id: string;
}
