import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

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

export const getSpecializationsFailedAction = createAction(
  '[SPECIALIZATION] failed get specializations list',
);

export const createSpecializationAction = createAction(
  '[SPECIALIZATION] create specialization',
  props<Name>(),
);

export const createSpecializationSuccessAction = createAction(
  '[SPECIALIZATION] success create specialization',
  props<{ specialization: INameId }>(),
);

export const getSpecializationByIdAction = createAction(
  '[SPECIALIZATION] get specialization by id',
  props<{ id: string }>(),
);

export const getSpecializationByIdSuccessAction = createAction(
  '[SPECIALIZATION] success get specialization by id',
  props<{ specialization: INameId }>(),
);

export const updateSpecializationAction = createAction(
  '[SPECIALIZATION] update specialization',
  props<INameId>(),
);

export const updateSpecializationSuccessAction = createAction(
  '[SPECIALIZATION] success update specialization',
  props<{ id: string }>(),
);

export const deleteSpecializationAction = createAction(
  '[SPECIALIZATION] delete specialization',
  props<{ id: string }>(),
);

export const deleteSpecializationSuccessAction = createAction(
  '[SPECIALIZATION] success delete specialization',
  props<{ id: string }>(),
);

export const clearSpecializationsAction = createAction('[SPECIALIZATION] clear languages store');
