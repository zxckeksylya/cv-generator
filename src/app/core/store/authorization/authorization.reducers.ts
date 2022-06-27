import { createReducer, on } from '@ngrx/store';
import { clearAuthorizationStateSuccessAction } from './authorization.actions';
import {
  initTokenSuccessAction,
  loginUserAction,
  loginUserSuccessAction,
  loginUserFailedAction,
} from './authorization.actions';

export const AUTHORIZATION_FEATURE_KEY = 'authorization';

export interface AuthorizationState {
  accessToken: string;
  formEnabled: boolean;
}

export const initionalAuthorizationState: AuthorizationState = {
  accessToken: '',
  formEnabled: true,
};

export const authorizationReducer = createReducer(
  initionalAuthorizationState,
  on(initTokenSuccessAction, (state, action) => ({
    ...state,
    accessToken: action.accessToken,
  })),
  on(loginUserAction, (state) => ({
    ...state,
    formEnabled: false,
  })),
  on(loginUserSuccessAction, loginUserFailedAction, (state) => ({
    ...state,
    formEnabled: true,
  })),
  on(clearAuthorizationStateSuccessAction, () => ({
    ...initionalAuthorizationState,
  })),
);
