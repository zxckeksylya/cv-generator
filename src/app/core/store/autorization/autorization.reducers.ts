import { createReducer, on } from '@ngrx/store';
import { initTokenSuccessAction } from './autorization.actions';

export const AUTHORIZATION_FEATURE_KEY = 'authorization';

export interface AuthorizationState {
  accessToken: string;
}

export const initionalAuthorizationState: AuthorizationState = {
  accessToken: '',
};

export const authorizationReducer = createReducer(
  initionalAuthorizationState,
  on(initTokenSuccessAction, (state, action) => ({
    ...state,
    accessToken: action.accessToken,
  })),
);
