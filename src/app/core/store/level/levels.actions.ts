import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

export const initLevelsStoreAction = createAction('[LEVELS] init levels');

export const initLevelsStoreSuccessAction = createAction('[LEVELS] success init levels');

export const initLevelsStoreFailedAction = createAction('[LEVELS] failed init levels');

export const getLevelsAction = createAction('[LEVELS] get levels list');

export const getLevelsSuccessAction = createAction(
  '[LEVELS] success get levels list',
  props<{ levels: INameId[] }>(),
);

export const getLevelsFailedAction = createAction('[LEVELS] failed get levels list');

export const createLevelAction = createAction('[LEVELS] create level', props<Name>());

export const createLevelSuccessAction = createAction(
  '[LEVELS] success create level',
  props<{ level: INameId }>(),
);

export const getLevelByIdAction = createAction('[LEVELS] get level by id', props<{ id: string }>());

export const getLevelByIdSuccessAction = createAction(
  '[LEVELS] success get level by id',
  props<{ level: INameId }>(),
);

export const updateLevelAction = createAction('[LEVELS] update level', props<INameId>());

export const updateLevelSuccessAction = createAction(
  '[LEVELS] success update level',
  props<{ id: string }>(),
);

export const deleteLevelAction = createAction('[LEVELS] delete level', props<{ id: string }>());

export const deleteLevelSuccessAction = createAction(
  '[LEVELS] success delete level',
  props<{ id: string }>(),
);

export const clearLevelsAction = createAction('[LEVELS] clear levels store');
