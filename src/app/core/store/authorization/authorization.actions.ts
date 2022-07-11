import { createAction, props } from '@ngrx/store';
import { AccessToken } from '../../interfaces/access-token.interface';
import { AuthorizationLoginResponse } from '../../interfaces/authorization-login-response.interface';
import { LoginForm } from '../../interfaces/login-form.interface';
import { User } from '../../interfaces/user.interface';

export const loginUserAction = createAction('[AUTHORIZATION] login user', props<LoginForm>());

export const loginUserSuccessAction = createAction(
  '[AUTHORIZATION] success login user',
  props<AuthorizationLoginResponse>(),
);

export const loginUserFailedAction = createAction('[AUTHORIZATION] failed login user');

export const setAuthorizationUserAction = createAction('[AUTHORIZATION] set authorization user');

export const setAuthorizationUserSuccessAction = createAction(
  '[AUTHORIZATION] success set authorization user',
  props<{ user: User }>(),
);

export const initTokenAction = createAction('[AUTHORIZATION] init token');

export const initTokenSuccessAction = createAction(
  '[AUTHORIZATION] success token',
  props<AccessToken>(),
);

export const changeTokenAction = createAction(
  '[AUTHORIZATION] change access token',
  props<AccessToken>(),
);

export const clearAuthorizationStateAction = createAction(
  '[AUTHORIZATION] clear authorization state',
);

export const clearAuthorizationStateSuccessAction = createAction(
  '[AUTHORIZATION] success clear authorization state',
);
