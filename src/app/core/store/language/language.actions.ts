import { createAction, props } from '@ngrx/store';
import { CreateLanguage, Language, UpdateLanguage } from '../../interfaces/language.interface';

export const initLanguagesStoreAction = createAction('[LANGUAGES] init languages');

export const initLanguagesStoreSuccessAction = createAction('[LANGUAGES] success init languages');

export const initLanguagesStoreFailedAction = createAction('[LANGUAGES] failed init languages');

export const getLanguagesAction = createAction('[LANGUAGES] get languages list');

export const getLanguagesSuccessAction = createAction(
  '[LANGUAGES] success get languages list',
  props<{ languages: Language[] }>(),
);

export const getLanguagesFailedAction = createAction('[LANGUAGES] failed get languages list');

export const getLanguageByIdAction = createAction(
  '[LANGUAGES] get language by id',
  props<{ id: string }>(),
);

export const getLanguageByIdSuccessAction = createAction(
  '[LANGUAGES] success get language by id',
  props<{ language: Language }>(),
);

export const createLanguageAction = createAction(
  '[LANGUAGES] create language',
  props<CreateLanguage>(),
);

export const createLanguageSuccessAction = createAction(
  '[LANGUAGES] success create language',
  props<{ language: Language }>(),
);

export const baseCreateLanguageAction = createAction(
  '[LANGUAGES] base create language',
  props<CreateLanguage>(),
);

export const baseCreateLanguageSuccessAction = createAction(
  '[LANGUAGES] success base create language',
  props<{ language: Language }>(),
);

export const updateLanguageAction = createAction(
  '[LANGUAGES] update language',
  props<{ language: UpdateLanguage }>(),
);

export const updateLanguageSuccessAction = createAction(
  '[LANGUAGES] success update language',
  props<{ id: string }>(),
);

export const deleteLanguageAction = createAction(
  '[LANGUAGES] delete language',
  props<{ id: string }>(),
);

export const deleteLanguageSuccessAction = createAction(
  '[LANGUAGES] success delete language',
  props<{ id: string }>(),
);

export const changeNotLanguageAction = createAction('[LANGUAGES] change not language');

export const clearLanguagesAction = createAction('[LANGUAGES] clear languages store');

export const clearLastCreatedLanguages = createAction('[LANGUAGES] clear last created languages');
