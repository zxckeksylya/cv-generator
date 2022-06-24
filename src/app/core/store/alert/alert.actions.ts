import { createAction, props } from '@ngrx/store';
import { AlertNotification } from '../../interfaces/alert-notification.interface';

export const setAlertAction = createAction('[ALERT] set alert', props<AlertNotification>());
export const showErrorAlertAction = createAction('[ALERT] show error alert');
export const showSuccessAlertAction = createAction('[ALERT] show success alert');
