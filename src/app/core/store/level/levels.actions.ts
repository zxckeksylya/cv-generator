import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initLevelsStoreAction = createAction('[LEVELS] init levels');

export const initLevelsStoreSuccessAction = createAction('[LEVELS] success init levels');

export const initLevelsStoreFailedAction = createAction('[LEVELS] failed init levels');

export const getLevelsAction = createAction('[LEVELS] get levels list');

export const getLevelsSuccessAction = createAction(
  '[LEVELS] success get levels list',
  props<{ levels: INameId[] }>(),
);

export const getLevelsFailedAction = createAction('[LEVELS] failed get levels list');

export const clearLevelsAction = createAction('[LEVELS] clear levels store');
