import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initLanguagesStoreAction = createAction('[SPECIALIZATIONS] init languages');

export const initLanguagesStoreSuccessAction = createAction(
  '[SPECIALIZATIONS] success init languages',
);

export const initLanguagesStoreFailedAction = createAction(
  '[SPECIALIZATIONS] failed init languages',
);

export const getLanguagesAction = createAction('[SPECIALIZATIONS] get languages list');

export const getLanguagesSuccessAction = createAction(
  '[SPECIALIZATION] success get languages list',
  props<{ languages: INameId[] }>(),
);

export const getLanguagesFailedAction = createAction('[PROJECT_ROLES] failed get languages list');

export const clearLanguagesAction = createAction('[SPECIALIZATION] clear languages store');
