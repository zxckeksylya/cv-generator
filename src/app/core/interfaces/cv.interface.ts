import { GetEmployee } from './employee.interface';
import { GetProject } from './project.interface';

export interface CV {
  id: string;
  user: GetEmployee;
  projects: GetProject[];
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CVMap {
  [id: string]: CV;
}

export interface CreateCV {
  user: string;
  projects: string[];
  name: string;
  description: string;
}

export interface CreateCVResponse {
  id: string;
  user: string;
  name: string;
  projects: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateCV {
  id: string;
  user: string;
  name: string;
  projects: string;
  description: string;
}

export interface UpdateCVResponse {
  id: string;
  user: string;
  name: string;
  projects: string[];
  description: string[];
  createdAt: string;
  updatedAt: string;
}
