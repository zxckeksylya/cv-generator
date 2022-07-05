import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpecializationsState, SPECIALIZATION_FEATURE_KEY } from './specializations.reducers';

export const specializationsFeatureSelector = createFeatureSelector<SpecializationsState>(
  SPECIALIZATION_FEATURE_KEY,
);

export const getSpecializationsSelector = createSelector(
  specializationsFeatureSelector,
  (state) => state.specializations,
);

export const getIsInitSpecializationsSelector = createSelector(
  specializationsFeatureSelector,
  (state) => state.isInitSpecializations,
);
