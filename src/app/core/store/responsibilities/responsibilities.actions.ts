import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initResponsibilitiesStoreAction = createAction(
  '[RESPONSIBILITIES] init responsibilities',
);

export const initResponsibilitiesStoreSuccessAction = createAction(
  '[RESPONSIBILITIES] success init responsibilities',
);

export const initResponsibilitiesStoreFailedAction = createAction(
  '[RESPONSIBILITIES] failed init responsibilities',
);

export const getResponsibilitiesAction = createAction(
  '[RESPONSIBILITIES] get responsibilities list',
);

export const getResponsibilitiesSuccessAction = createAction(
  '[RESPONSIBILITIES] success get responsibilities list',
  props<{ responsibilities: INameId[] }>(),
);

export const getResponsibilitiesFailedAction = createAction(
  '[RESPONSIBILITIES] failed get responsibilities list',
);

export const clearResponsibilitiesAction = createAction('[RESPONSIBILITIES] clear projects store');
