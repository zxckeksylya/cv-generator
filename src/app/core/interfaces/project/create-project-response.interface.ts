import { CreateProject } from './create-project.interface';

export interface CreateProjectResponse extends CreateProject {
  id: string;
}
