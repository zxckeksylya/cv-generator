import { createAction, props } from '@ngrx/store';
import { AlertNotification } from '../../interfaces/alert-notification.interface';

export const showErrorAlertAction = createAction(
  '[ALERT] show error alert',
  props<AlertNotification>(),
);
export const showSuccessAlertAction = createAction(
  '[ALERT] show success alert',
  props<AlertNotification>(),
);
