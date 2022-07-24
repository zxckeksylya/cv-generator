import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

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

export const createProjectRoleAction = createAction(
  '[PROJECT_ROLES] create project-role',
  props<Name>(),
);

export const createProjectRoleSuccessAction = createAction(
  '[PROJECT_ROLES] success create project-role',
  props<{ projectRole: INameId }>(),
);

export const getProjectRoleByIdAction = createAction(
  '[PROJECT_ROLES] get project-role by id',
  props<{ id: string }>(),
);

export const getProjectRoleByIdSuccessAction = createAction(
  '[PROJECT_ROLES] success get project-role by id',
  props<{ projectRole: INameId }>(),
);

export const updateProjectRoleAction = createAction(
  '[PROJECT_ROLES] update project-role',
  props<INameId>(),
);

export const updateProjectRoleSuccessAction = createAction(
  '[PROJECT_ROLES] success update project-role',
  props<{ id: string }>(),
);

export const deleteProjectRoleAction = createAction(
  '[PROJECT_ROLES] delete project-role',
  props<{ id: string }>(),
);

export const deleteProjectRoleSuccessAction = createAction(
  '[PROJECT_ROLES] success delete project-role',
  props<{ id: string }>(),
);

export const clearProjectRolesAction = createAction('[PROJECT_ROLES] clear project-roles store');
