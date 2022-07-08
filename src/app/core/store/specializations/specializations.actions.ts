import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initSpecializationsStoreAction = createAction(
  '[SPECIALIZATIONS] init specializations',
);

export const initSpecializationsStoreSuccessAction = createAction(
  '[SPECIALIZATIONS] success init specializations',
);

export const initSpecializationsStoreFailedAction = createAction(
  '[SPECIALIZATIONS] failed init specializations',
);

export const getSpecializationsAction = createAction('[SPECIALIZATIONS] get specializations list');

export const getSpecializationsSuccessAction = createAction(
  '[SPECIALIZATION] success get specializations list',
  props<{ specializations: INameId[] }>(),
);

export const clearSpecializationsAction = createAction('[SPECIALIZATION] clear projects store');
