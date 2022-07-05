import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RESPONSIBILITIES_FEATURE_KEY } from './responsibilities.reducers';
import { ResponsibilitiesState } from './responsibilities.reducers';

export const responsibilitiesFeatureSelector = createFeatureSelector<ResponsibilitiesState>(
  RESPONSIBILITIES_FEATURE_KEY,
);

export const getResponsibilitiesSelector = createSelector(
  responsibilitiesFeatureSelector,

  (state) => state.responsibilities,
);

export const getIsInitResponsibilitiesSelector = createSelector(
  responsibilitiesFeatureSelector,

  (state) => state.isInitResponsibilities,
);
