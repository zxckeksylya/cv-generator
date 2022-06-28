import { createReducer, on } from '@ngrx/store';
import { initThemeAction, initThemeSuccessAction } from './theme.actions';

export const THEME_FEATURE_KEY = 'theme';

export interface ThemeState {
  theme: string;
}

export const initialThemeState: ThemeState = {
  theme: '',
};

export const themeReducer = createReducer(
  initialThemeState,
  on(initThemeAction, (state) => ({
    ...state,
  })),
  on(initThemeSuccessAction, (state, action) => ({
    ...state,
    theme: action.theme,
  })),
);
