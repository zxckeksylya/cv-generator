import { createReducer, on } from '@ngrx/store';
import { ProjectMap } from '../../interfaces/project.interface';
import {
  createProjectSuccessAction,
  getProjectByIdSuccessAction,
  getProjectsSuccessAction,
} from './projects.actions';
import { arrayProjectsToMap } from '../../utils/projects/array-projects-to-map.util';
import { deleteProjectSuccessAction } from './projects.actions';
import { deleteProjectInMap } from '../../utils/projects/delete-project-in-map.util';

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
  on(createProjectSuccessAction, (state, project) => ({
    ...state,
    projects: {
      [project.id]: project,
      ...state.projects,
    },
  })),

  on(deleteProjectSuccessAction, (state, action) => ({
    ...state,
    projects: deleteProjectInMap(state.projects, action.id),
  })),
);
