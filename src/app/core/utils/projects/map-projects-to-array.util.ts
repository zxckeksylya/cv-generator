import { GetProject, ProjectMap } from '../../interfaces/project.interface';

export const mapProjectsToArray = (projects: ProjectMap): GetProject[] => Object.values(projects);
