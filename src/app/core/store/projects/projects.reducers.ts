import { createReducer, on } from '@ngrx/store';
import { GetProject } from '../../interfaces/project/get-project.interface';
import { getProjectsSuccessAction } from './projects.actions';

export const PROJECTS_FEATURE_KEY = 'projects';

export interface ProjectsState {
  projects: GetProject[];
}

export const initialProjectsState: ProjectsState = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialProjectsState,
  on(getProjectsSuccessAction, (state, action) => ({
    ...state,
    projects: action.projects,
  })),
);
