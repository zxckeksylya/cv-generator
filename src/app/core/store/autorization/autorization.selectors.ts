import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorizationState, AUTHORIZATION_FEATURE_KEY } from './autorization.reducers';

export const authorizationFeatureSelector =
  createFeatureSelector<AuthorizationState>(AUTHORIZATION_FEATURE_KEY);

export const authorizationSelector = createSelector(
  authorizationFeatureSelector,
  (state) => state.accessToken,
);
