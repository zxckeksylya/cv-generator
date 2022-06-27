import { createAction, props } from '@ngrx/store';
import { AccessToken } from '../../interfaces/access-token.interface';
import { LoginForm } from '../../interfaces/login-form.interface';

export const loginUserAction = createAction('[AUTHORIZATION] login user', props<LoginForm>());

export const loginUserSuccessAction = createAction(
  '[AUTHORIZATION] success login user',
  props<AccessToken>(),
);

export const loginUserFailedAction = createAction('[AUTHORIZATION] failed login user');

export const initTokenAction = createAction('[AUTHORIZATION] init token');

export const initTokenSuccessAction = createAction(
  '[AUTHORIZATION] success token',
  props<AccessToken>(),
);

export const changeTokenAction = createAction(
  '[AUTHORIZATION] change access token',
  props<AccessToken>(),
);
