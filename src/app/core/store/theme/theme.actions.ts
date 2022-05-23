import { createAction, props } from '@ngrx/store';

export const changeThemeAction = createAction('[THEME] change theme', props<{ theme: string }>());
export const initThemeAction = createAction('[THEME] init theme');
export const initThemeSuccessAction = createAction(
  '[THEME] succese theme',
  props<{
    theme: string;
  }>(),
);
