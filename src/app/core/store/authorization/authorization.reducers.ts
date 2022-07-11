import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import {
  clearAuthorizationStateSuccessAction,
  setAuthorizationUserSuccessAction,
} from './authorization.actions';
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
  user: User | null;
}

export const initialAuthorizationState: AuthorizationState = {
  accessToken: '',
  formEnabled: true,
  user: null,
};

export const authorizationReducer = createReducer(
  initialAuthorizationState,
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
    ...initialAuthorizationState,
  })),
  on(setAuthorizationUserSuccessAction, (state, action) => ({
    ...state,
    user: action.user,
  })),
);
