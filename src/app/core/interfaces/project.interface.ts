import { INameId } from './name-id.interface';

export interface GetProject {
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  taskPerformed: string;
  description: string;
  id: string;
  specializations: INameId[];
  projectRoles: INameId[];
  responsibilities: INameId[];
}

export interface DeleteProject {
  id: string;
}

export interface DeleteProjectResponse {
  deleteCount: number;
}

export interface CreateProject {
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  description: string;
  tasksPerformed: string;
  projectRoles: string[];
  specializations: string[];
  responsibilities: string[];
}

export interface CreateProjectResponse extends CreateProject {
  id: string;
}

export interface UpdateProject {
  id: string;
  name: string;
  secondName: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  description: string;
  tasksPerformed: string;
  projectRoles: string[];
  specializations: string[];
  responsibilities: string[];
}

export interface ProjectMap {
  [id: string]: GetProject;
}
