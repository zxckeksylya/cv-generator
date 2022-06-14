import { createAction, props } from '@ngrx/store';

export const changeLanguageAction = createAction(
  '[LANGUAGE] change language',
  props<{ language: string }>(),
);
export const initLanguageAction = createAction('[LANGUAGE] init language');
export const initLanguageSuccessAction = createAction(
  '[LANGUAGE] success language',
  props<{ language: string }>(),
);
