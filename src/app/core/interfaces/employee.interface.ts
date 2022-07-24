import { CreateLanguage, Language } from './language.interface';
import { INameId } from './name-id.interface';
import { CreateSkill, Skill } from './skill.interface';

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
  skills: CreateSkill[];
  languages: CreateLanguage[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  id: string;
}

export interface UpdateEmployeeRequest {
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

export interface CreateEmployee {
  skills: CreateSkill[];
  languages: CreateLanguage[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  password: string;
}

export interface CreateEmployeeRequest {
  skills: string[];
  languages: string[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  password: string;
}

export interface CreateNewEmployee {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
  languages: CreateLanguage[];
  skills: CreateSkill[];
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
  skills: CreateSkill[];
  languages: CreateLanguage[];
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  diplomaProfession: string;
  department: string;
  role: string;
}
