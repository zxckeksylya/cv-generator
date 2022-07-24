import { createReducer, on } from '@ngrx/store';
import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearRolesAction,
  createRoleSuccessAction,
  deleteRoleSuccessAction,
  getRoleByIdSuccessAction,
  getRolesSuccessAction,
} from './roles.actions';

export const ROLES_FEATURE_KEY = 'roles';

export interface RolesState {
  roles: INameIdMap;
  isInitRoles: boolean;
}

export const initialRolesState: RolesState = {
  roles: {},
  isInitRoles: false,
};

export const rolesReducer = createReducer(
  initialRolesState,
  on(clearRolesAction, () => ({
    ...initialRolesState,
  })),
  on(getRolesSuccessAction, (state, action) => ({
    ...state,
    isInitRoles: true,
    roles: arrayToMap<INameId>(action.roles, 'id'),
  })),
  on(createRoleSuccessAction, (state, action) => ({
    ...state,
    roles: {
      [action.role.id]: action.role,
      ...state.roles,
    },
  })),
  on(getRoleByIdSuccessAction, (state, action) => ({
    ...state,
    roles: {
      ...state.roles,
      [action.role.id]: action.role,
    },
  })),
  on(deleteRoleSuccessAction, (state, action) => ({
    ...state,
    roles: deleteInMap<INameIdMap>(state.roles, action.id),
  })),
);
