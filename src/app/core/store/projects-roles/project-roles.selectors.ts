import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectRolesState, PROJECT_ROLES_FEATURE_KEY } from './project-roles.reducers';

export const projectRolesFeatureSelector =
  createFeatureSelector<ProjectRolesState>(PROJECT_ROLES_FEATURE_KEY);

export const getProjectRolesSelector = createSelector(
  projectRolesFeatureSelector,

  (state) => state.projectRoles,
);

export const getIsInitProjectRolesSelector = createSelector(
  projectRolesFeatureSelector,

  (state) => state.isInitProjectRoles,
);
