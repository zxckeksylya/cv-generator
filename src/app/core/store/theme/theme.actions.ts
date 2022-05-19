import { createAction } from '@ngrx/store';

export const setLightThemeAction = createAction('[THEME] set light theme');
export const setDarkThemeAction = createAction('[THEME] set dark theme');
export const initThemeAction = createAction('[THEME] init theme');
