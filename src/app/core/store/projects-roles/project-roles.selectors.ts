import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectRolesState, PROJECT_ROLES_FEATURE_KEY } from './project-roles.reducers';

export const projectRolesFeatureSelector =
  createFeatureSelector<ProjectRolesState>(PROJECT_ROLES_FEATURE_KEY);

export const getProjectRolesSelector = createSelector(projectRolesFeatureSelector, (state) =>
  Object.values(state.projectRoles),
);

export const getIsInitProjectRolesSelector = createSelector(
  projectRolesFeatureSelector,
  (state) => state.isInitProjectRoles,
);

export const getProjectRoleByIdSelector = createSelector(
  projectRolesFeatureSelector,
  (state: ProjectRolesState, props: { id: string }) => state.projectRoles[props.id],
);
