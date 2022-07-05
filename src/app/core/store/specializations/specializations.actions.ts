import { createAction } from '@ngrx/store';

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
);

export const clearSpecializationsAction = createAction('[SPECIALIZATION] ');
