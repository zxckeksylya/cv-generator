import { createReducer, on } from '@ngrx/store';
import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearProjectRolesAction,
  createProjectRoleSuccessAction,
  deleteProjectRoleSuccessAction,
  getProjectRoleByIdSuccessAction,
  getProjectRolesSuccessAction,
} from './project-roles.actions';

export const PROJECT_ROLES_FEATURE_KEY = 'project-roles';

export interface ProjectRolesState {
  projectRoles: INameIdMap;
  isInitProjectRoles: boolean;
}

export const initialProjectRolesState: ProjectRolesState = {
  projectRoles: {},
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
    projectRoles: arrayToMap<INameId>(action.projectRoles),
  })),
  on(createProjectRoleSuccessAction, (state, action) => ({
    ...state,
    projectRoles: {
      [action.projectRole.id]: action.projectRole,
      ...state.projectRoles,
    },
  })),
  on(getProjectRoleByIdSuccessAction, (state, action) => ({
    ...state,
    projectRoles: {
      ...state.projectRoles,
      [action.projectRole.id]: action.projectRole,
    },
  })),
  on(deleteProjectRoleSuccessAction, (state, action) => ({
    ...state,
    projectRoles: deleteInMap<INameIdMap>(state.projectRoles, action.id),
  })),
);
