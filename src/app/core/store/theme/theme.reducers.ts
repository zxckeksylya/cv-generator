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
    theme: Themes.DARK,
  })),
  on(setLightThemeAction, (state) => ({
    ...state,
    theme: Themes.LIGHT,
  })),
  on(initThemeAction, (state) => ({
    ...state,
    theme: localStorage.getItem('theme') || Themes.LIGHT,
  })),
);
