import { createAction, props } from '@ngrx/store';
import { CreateVirtualCV, VirtualCV } from '../../interfaces/virtual-cv.interface';

export const initVirtualCVStoreAction = createAction('[VIRTUAL-CV] init virtual-cv');

export const initVirtualCVSuccessStoreAction = createAction('[VIRTUAL-CV] success init virtual-cv');

export const initVirtualCVFailedStoreAction = createAction('[VIRTUAL-CV] failed init virtual-cv');

export const getVirtualCVsAction = createAction('[VIRTUAL-CV] get virtual-cvs list');

export const getVirtualCVsSuccessAction = createAction(
  '[VIRTUAL-CV] success get virtual-cvs list',
  props<{ virtualCvs: VirtualCV[] }>(),
);

export const getVirtualCVsFailedAction = createAction('[VIRTUAL-CV] failed get virtual-cvs list');

export const createVirtualCVAction = createAction(
  '[VIRTUAL-CV] create virtual-cv',
  props<{ virtualCV: CreateVirtualCV }>(),
);

export const createVirtualCVSuccessAction = createAction(
  '[VIRTUAL-CV] success create virtual-cv',
  props<{ virtualCV: VirtualCV }>(),
);

export const getVirtualCVByIdAction = createAction(
  '[VIRTUAL-CV] get virtual-cv by id',
  props<{ id: string }>(),
);

export const getVirtualCVByIdSuccessAction = createAction(
  '[VIRTUAL-CV] success get virtual-cv by id',
  props<{ virtualCV: VirtualCV }>(),
);

export const updateVirtualCVAction = createAction(
  '[VIRTUAL-CV] update virtual-cv',
  props<{ virtualCV: VirtualCV }>(),
);

export const updateVirtualCVSuccessAction = createAction(
  '[VIRTUAL-CV] success update virtual-cv',
  props<{ id: string }>(),
);

export const clearVirtualCVsAction = createAction('[VIRTUAL-CV] clear virtual-cv store');

export const activateEmployeeAction = createAction(
  '[VIRTUAL-CV] activate employee',
  props<{ id: string }>(),
);

export const clearActivateEmployeeAction = createAction('[VIRTUAL-CV] clear active employee');
