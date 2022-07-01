import { GetProject, ProjectMap } from '../../interfaces/project.interface';
import { ProjectsState } from '../../store/projects/projects.reducers';

export const updateProjectInMap = (state: ProjectsState, project: GetProject): ProjectMap => ({
  ...state.projects,
  [project.id]: project,
});
