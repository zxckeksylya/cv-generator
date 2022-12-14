import { createReducer, on } from '@ngrx/store';
import { GetProject, ProjectMap } from '../../interfaces/project.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearProjectsStoreAction,
  createProjectSuccessAction,
  deleteProjectSuccessAction,
  getProjectByIdSuccessAction,
  getProjectsSuccessAction,
} from './projects.actions';

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

  on(getProjectByIdSuccessAction, (state, action) => ({
    ...state,
    projects: {
      ...state.projects,
      [action.project.id]: action.project,
    },
  })),

  on(getProjectsSuccessAction, (state, action) => ({
    ...state,
    isInitProjects: true,
    projects: arrayToMap<GetProject>(action.projects, 'id'),
  })),

  on(clearProjectsStoreAction, () => ({
    ...initialProjectsState,
  })),

  on(createProjectSuccessAction, (state, action) => ({
    ...state,
    projects: {
      [action.project.id]: action.project,
      ...state.projects,
    },
  })),

  on(deleteProjectSuccessAction, (state, action) => ({
    ...state,
    projects: deleteInMap<ProjectMap>(state.projects, action.id),
  })),
);
