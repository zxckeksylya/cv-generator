import { GetProject, ProjectMap } from '../../interfaces/project.interface';

export const arrayProjectsToMap = (projects: GetProject[]): ProjectMap =>
  projects.reduce((pv, cv) => {
    pv[cv.id] = cv;
    return pv;
  }, {} as ProjectMap);
