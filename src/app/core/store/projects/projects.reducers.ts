import { createReducer, on } from '@ngrx/store';
import { ProjectMap } from '../../interfaces/project.interface';
import { getProjectByIdSuccessAction, getProjectsSuccessAction } from './projects.actions';
import { arrayProjectsToMap } from '../../utils/projects/array-projects-to-map.util';

export const PROJECTS_FEATURE_KEY = 'projects';

export interface ProjectsState {
  projects: ProjectMap;
  isInitProjects: boolean;
}

export const initialProjectsState: ProjectsState = {
  projects: {},
  isInitProjects: false,
};

export const projectsReducer = createReducer(
  initialProjectsState,
  on(getProjectByIdSuccessAction, (state, project) => ({
    ...state,
    projects: {
      ...state.projects,
      [project.id]: project,
    },
  })),
  on(getProjectsSuccessAction, (state, action) => ({
    ...state,
    isInitProjects: true,
    projects: arrayProjectsToMap(action.projects),
  })),
);
