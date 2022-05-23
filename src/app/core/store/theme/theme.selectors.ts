import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState, THEME_FEATURE_KEY } from './theme.reducers';

export const themeFeatureSelector = createFeatureSelector<ThemeState>(THEME_FEATURE_KEY);

export const themeSelector = createSelector(themeFeatureSelector, (state) => state.theme);
