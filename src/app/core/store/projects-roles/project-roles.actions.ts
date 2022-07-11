import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initProjectRolesStoreAction = createAction('[PROJECT_ROLES] init project-roles');

export const initProjectRolesStoreSuccessAction = createAction(
  '[PROJECT_ROLES] success init project-roles',
);

export const initProjectRolesStoreFailedAction = createAction(
  '[PROJECT_ROLES] failed init project-roles',
);

export const getProjectRolesAction = createAction('[PROJECT_ROLES] get project-roles list');

export const getProjectRolesSuccessAction = createAction(
  '[PROJECT_ROLES] success get project-roles list',
  props<{ projectRoles: INameId[] }>(),
);

export const getProjectRolesFailedAction = createAction(
  '[PROJECT_ROLES] failed get project-roles list',
);

export const clearProjectRolesAction = createAction('[PROJECT_ROLES] clear project-roles store');
