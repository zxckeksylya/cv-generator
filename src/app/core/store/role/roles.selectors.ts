import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROLES_FEATURE_KEY } from './roles.reducers';
import { RolesState } from './roles.reducers';

export const rolesFeatureSelector = createFeatureSelector<RolesState>(ROLES_FEATURE_KEY);

export const getRolesSelector = createSelector(rolesFeatureSelector, (state) => state.roles);

export const getIsInitRolesSelector = createSelector(
  rolesFeatureSelector,
  (state) => state.isInitRoles,
);
