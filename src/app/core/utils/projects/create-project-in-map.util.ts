import { ProjectMap, GetProject } from '../../interfaces/project.interface';
import { ProjectsState } from '../../store/projects/projects.reducers';

export const createProjectInMap = (state: ProjectsState, project: GetProject): ProjectMap => ({
  [project.id]: project,
  ...state.projects,
});
