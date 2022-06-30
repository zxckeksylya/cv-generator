import { ProjectMap } from '../../interfaces/project.interface';

export const deleteProjectInMap = (projects: ProjectMap, id: string): ProjectMap => {
  delete projects[id];
  return projects;
};
