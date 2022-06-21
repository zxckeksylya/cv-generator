import { createAction, props } from '@ngrx/store';
import { Token } from '../../interfaces/token.interface';
import { Login } from '../../interfaces/login.interface';

export const loginAction = createAction('[AUTHORIZATION] login user', props<Login>());
export const changeTokenAction = createAction('[AUTHORIZATION] set access token', props<Token>());
export const setAthorizationAlertAction = createAction(
  '[AUTHORIZATION] set alert',
  props<{ alert: string }>(),
);
export const initTokenAction = createAction('[AUTHORIZATION] init token');
export const initTokenSuccessAction = createAction('[AUTHORIZATION] success token', props<Token>());
