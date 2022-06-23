import { createAction, props } from '@ngrx/store';
import { ErrorNotification } from '../../interfaces/error-notification.interface';

export const showErrorAlertAction = createAction('[ERROR] show error', props<ErrorNotification>());
export const showErrorAlertSuccessAction = createAction('[ERROR] success show error');
