import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import { clearRolesAction, getRolesSuccessAction } from './roles.actions';

export const ROLES_FEATURE_KEY = 'roles';

export interface RolesState {
  roles: INameId[];
  isInitRoles: boolean;
}

export const initialRolesState: RolesState = {
  roles: [],
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
    roles: action.roles,
  })),
);
