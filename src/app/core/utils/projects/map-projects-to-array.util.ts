import { GetProject, ProjectMap } from '../../interfaces/project.interface';

export const mapProjectsToArray = (projects: ProjectMap): GetProject[] => {
  const arrayOfProjects = [];
  for (const key in projects) {
    if (Object.prototype.hasOwnProperty.call(projects, key)) {
      arrayOfProjects.push(projects[key]);
    }
  }
  return arrayOfProjects;
};
