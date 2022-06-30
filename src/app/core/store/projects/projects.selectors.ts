import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mapProjectsToArray } from '../../utils/projects/map-projects-to-array.util';
import { ProjectsState, PROJECTS_FEATURE_KEY } from './projects.reducers';

export const projectsFeatureSelector = createFeatureSelector<ProjectsState>(PROJECTS_FEATURE_KEY);

export const getProjectsSelector = createSelector(projectsFeatureSelector, (state) =>
  mapProjectsToArray(state.projects),
);

export const getProjectByIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, id: string) => state.projects[id],
);

export const getIsInitProjectsSelector = createSelector(
  projectsFeatureSelector,
  (state) => state.isInitProjects,
);
