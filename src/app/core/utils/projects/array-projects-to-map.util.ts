import { GetProject, ProjectMap } from '../../interfaces/project.interface';

export const arrayProjectsToMap = (projects: GetProject[]): ProjectMap => {
  const map: ProjectMap = {};
  projects.reduce((pv, cv) => {
    pv[cv.id] = cv;
    return pv;
  }, map);
  return map;
};
