import { createReducer, on } from '@ngrx/store';
import { ProjectMap } from '../../interfaces/project.interface';
import { arrayProjectsToMap } from '../../utils/projects/array-projects-to-map.util';
import { deleteProjectInMap } from '../../utils/projects/delete-project-in-map.util';
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
  on(clearProjectsStoreAction, () => ({
    ...initialProjectsState,
  })),
  on(createProjectSuccessAction, (state, project) => ({
    ...state,
    projects: {
      [project.id]: project,
      ...state.projects,
    } as ProjectMap,
  })),

  on(deleteProjectSuccessAction, (state, action) => ({
    ...state,
    projects: deleteProjectInMap(state.projects, action.id),
  })),
);
