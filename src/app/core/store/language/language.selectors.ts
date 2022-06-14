import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LanguageState, LANGUAGE_FEATURE_KEY } from './language.reducers';

export const languageFeatureSelector = createFeatureSelector<LanguageState>(LANGUAGE_FEATURE_KEY);

export const languageSelctor = createSelector(languageFeatureSelector, (state) => state.language);
