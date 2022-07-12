import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LanguagesState, LANGUAGE_FEATURE_KEY } from './language.reducers';

export const languagesFeatureSelector = createFeatureSelector<LanguagesState>(LANGUAGE_FEATURE_KEY);

export const getLanguagesSelector = createSelector(
  languagesFeatureSelector,
  (state) => state.languages,
);

export const getIsInitLanguagesSelector = createSelector(
  languagesFeatureSelector,
  (state) => state.isInitLanguages,
);
