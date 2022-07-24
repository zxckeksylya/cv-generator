import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponsibilitiesState, RESPONSIBILITIES_FEATURE_KEY } from './responsibilities.reducers';

export const responsibilitiesFeatureSelector = createFeatureSelector<ResponsibilitiesState>(
  RESPONSIBILITIES_FEATURE_KEY,
);

export const getResponsibilitiesSelector = createSelector(
  responsibilitiesFeatureSelector,
  (state) => Object.values(state.responsibilities),
);

export const getIsInitResponsibilitiesSelector = createSelector(
  responsibilitiesFeatureSelector,
  (state) => state.isInitResponsibilities,
);

export const getResponsibilityByIdSelector = createSelector(
  responsibilitiesFeatureSelector,
  (state: ResponsibilitiesState, props: { id: string }) => state.responsibilities[props.id],
);
