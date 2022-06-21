import { createReducer, on } from '@ngrx/store';
import { setAlertsAction } from './alert.actions';
export const ALERT_FEATURE_KEY = 'alert';

export interface AlertState {
  errors: string[];
}

export const initionalAlertState: AlertState = {
  errors: [],
};

export const alertReducer = createReducer(
  initionalAlertState,
  on(setAlertsAction, (state, action) => ({
    ...state,
    errors: action.errors,
  })),
);
