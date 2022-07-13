import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState, PROJECTS_FEATURE_KEY } from './projects.reducers';

export const projectsFeatureSelector = createFeatureSelector<ProjectsState>(PROJECTS_FEATURE_KEY);

export const getProjectsSelector = createSelector(projectsFeatureSelector, (state) =>
  Object.values(state.projects),
);

export const getProjectByIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, props: { id: string }) => state.projects[props.id],
);

export const getIsInitProjectsSelector = createSelector(
  projectsFeatureSelector,
  (state) => state.isInitProjects,
);
