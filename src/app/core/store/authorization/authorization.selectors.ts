import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorizationState, AUTHORIZATION_FEATURE_KEY } from './authorization.reducers';

export const authorizationFeatureSelector =
  createFeatureSelector<AuthorizationState>(AUTHORIZATION_FEATURE_KEY);

export const authorizationSelector = createSelector(
  authorizationFeatureSelector,
  (state) => state.accessToken,
);

export const formEnabledSelector = createSelector(
  authorizationFeatureSelector,
  (state) => state.formEnabled,
);
