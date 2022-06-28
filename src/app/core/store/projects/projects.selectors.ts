import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState, PROJECTS_FEATURE_KEY } from './projects.reducers';

export const projectsFeatureSelector = createFeatureSelector<ProjectsState>(PROJECTS_FEATURE_KEY);

export const projectsSelector = createSelector(projectsFeatureSelector, (state) => state.projects);
