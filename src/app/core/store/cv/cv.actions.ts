import { createAction, props } from '@ngrx/store';
import { CreateCV, CV, UpdateCV } from '../../interfaces/cv.interface';

export const initCVsStoreAction = createAction('[CV] init CVs');

export const initCVsStoreSuccessAction = createAction('[CV] success init CVs');

export const initCVsStoreFailedAction = createAction('[CV] failed init CVs');

export const getCVsAction = createAction('[CV] get CVs list');

export const getCVsSuccessAction = createAction(
  '[CV] success get CVs list',
  props<{ cvs: CV[] }>(),
);

export const getCVByIdAction = createAction('[CV] get CV by id', props<{ id: string }>());

export const getCVByIdSuccessAction = createAction(
  '[CV] success get CV by id',
  props<{ cv: CV }>(),
);

export const createCVAction = createAction('[CV] create CV', props<CreateCV>());

export const createCVSuccessAction = createAction(
  '[CV] success create action',
  props<{ cv: CV }>(),
);

export const updateCVAction = createAction('[CV] update cv', props<UpdateCV>());

export const updateCVSuccessAction = createAction(
  '[CV] success update cv',
  props<{ id: string }>(),
);

export const clearCVStoreAction = createAction('[CV] clear cv store');
