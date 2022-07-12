import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initRolesStoreAction = createAction('[ROLES] init roles');

export const initRolesStoreSuccessAction = createAction('[ROLES] success init roles');

export const initRolesStoreFailedAction = createAction('[ROLES] failed init roles');

export const getRolesAction = createAction('[ROLES] get roles list');

export const getRolesSuccessAction = createAction(
  '[ROLES] success get roles list',
  props<{ roles: INameId[] }>(),
);

export const getRolesFailedAction = createAction('[ROLES] failed get roles list');

export const clearRolesAction = createAction('[ROLES] clear roles store');
