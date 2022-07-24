import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

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

export const createResponsibilityAction = createAction(
  '[RESPONSIBILITIES] create responsibility',
  props<Name>(),
);

export const createResponsibilitySuccessAction = createAction(
  '[RESPONSIBILITIES] success create responsibility',
  props<{ responsibility: INameId }>(),
);

export const getResponsibilityByIdAction = createAction(
  '[RESPONSIBILITIES] get responsibility by id',
  props<{ id: string }>(),
);

export const getResponsibilityByIdSuccessAction = createAction(
  '[RESPONSIBILITIES] success get responsibility by id',
  props<{ responsibility: INameId }>(),
);

export const updateResponsibilityAction = createAction(
  '[RESPONSIBILITIES] update responsibility',
  props<INameId>(),
);

export const updateResponsibilitySuccessAction = createAction(
  '[RESPONSIBILITIES] success update responsibility',
  props<{ id: string }>(),
);

export const deleteResponsibilityAction = createAction(
  '[RESPONSIBILITIES] delete responsibility',
  props<{ id: string }>(),
);

export const deleteResponsibilitySuccessAction = createAction(
  '[RESPONSIBILITIES] success delete responsibility',
  props<{ id: string }>(),
);

export const clearResponsibilitiesAction = createAction('[RESPONSIBILITIES] clear projects store');
