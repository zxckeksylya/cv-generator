import { createAction, props } from '@ngrx/store';
import { Language } from '../../interfaces/language.interface';

export const initLanguagesStoreAction = createAction('[LANGUAGESS] init languages');

export const initLanguagesStoreSuccessAction = createAction('[LANGUAGES] success init languages');

export const initLanguagesStoreFailedAction = createAction('[LANGUAGES] failed init languages');

export const getLanguagesAction = createAction('[LANGUAGES] get languages list');

export const getLanguagesSuccessAction = createAction(
  '[LANGUAGES] success get languages list',
  props<{ languages: Language[] }>(),
);

export const getLanguagesFailedAction = createAction('[LANGUAGES] failed get languages list');

export const clearLanguagesAction = createAction('[LANGUAGES] clear languages store');
