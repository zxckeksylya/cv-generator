import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

export const initRolesStoreAction = createAction('[ROLES] init roles');

export const initRolesStoreSuccessAction = createAction('[ROLES] success init roles');

export const initRolesStoreFailedAction = createAction('[ROLES] failed init roles');

export const getRolesAction = createAction('[ROLES] get roles list');

export const getRolesSuccessAction = createAction(
  '[ROLES] success get roles list',
  props<{ roles: INameId[] }>(),
);

export const getRolesFailedAction = createAction('[ROLES] failed get roles list');

export const createRoleAction = createAction('[ROLES] create role', props<Name>());

export const createRoleSuccessAction = createAction(
  '[ROLES] success create role',
  props<{ role: INameId }>(),
);

export const getRoleByIdAction = createAction('[ROLES] get role by id', props<{ id: string }>());

export const getRoleByIdSuccessAction = createAction(
  '[ROLES] success get role by id',
  props<{ role: INameId }>(),
);

export const updateRoleAction = createAction('[ROLES] update role', props<INameId>());

export const updateRoleSuccessAction = createAction(
  '[ROLES] success update role',
  props<{ id: string }>(),
);

export const deleteRoleAction = createAction('[ROLES] delete role', props<{ id: string }>());

export const deleteRoleSuccessAction = createAction(
  '[ROLES] success delete role',
  props<{ id: string }>(),
);

export const clearRolesAction = createAction('[ROLES] clear roles store');
