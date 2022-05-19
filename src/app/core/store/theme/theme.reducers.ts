import { createReducer, on } from '@ngrx/store';
import { Themes } from '../../enums/themes';
import { initThemeAction, setDarkThemeAction, setLightThemeAction } from './theme.actions';

export const THEME_FEATURE_KEY = 'theme';

export interface ThemeState {
  theme: string;
}

export const initionalState: ThemeState = {
  theme: '',
};

export const themeReducer = createReducer(
  initionalState,
  on(setDarkThemeAction, (state) => ({
    ...state,
    theme: 'dark',
  })),
  on(setLightThemeAction, (state) => ({
    ...state,
    theme: 'light',
  })),
  on(initThemeAction, (state) => ({
    ...state,
    theme: localStorage.getItem('theme') || Themes.LIGHT,
  })),
);
