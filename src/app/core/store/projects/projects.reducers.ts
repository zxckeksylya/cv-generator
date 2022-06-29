import { createReducer, on } from '@ngrx/store';
import { ProjectMap } from '../../interfaces/project.interface';
import { getProjectByIdSuccessAction, getProjectsSuccessAction } from './projects.actions';
import { arrayProjectsToMap } from '../../utils/projects/array-projects-to-map.util';

export const PROJECTS_FEATURE_KEY = 'projects';

export interface ProjectsState {
  projects: ProjectMap;
}

export const initialProjectsState: ProjectsState = {
  projects: {},
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
    projects: arrayProjectsToMap(action.projects),
  })),
);
