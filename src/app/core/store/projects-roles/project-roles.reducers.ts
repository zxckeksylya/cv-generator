import { INameId } from '../../interfaces/name-id.interface';

import { createReducer, on } from '@ngrx/store';
import { clearProjectRolesAction, getProjectRolesSuccessAction } from './project-roles.actions';

export const PROJECT_ROLES_FEATURE_KEY = 'project-roles';

export interface ProjectRolesState {
  projectRoles: INameId[];
  isInitProjectRoles: boolean;
}

export const initialProjectRolesState: ProjectRolesState = {
  projectRoles: [],
  isInitProjectRoles: false,
};

export const projectRolesReducer = createReducer(
  initialProjectRolesState,

  on(clearProjectRolesAction, () => ({
    ...initialProjectRolesState,
  })),

  on(getProjectRolesSuccessAction, (state, action) => ({
    ...state,
    isInitProjectRoles: true,
    projectRoles: action.projectRoles,
  })),
);
