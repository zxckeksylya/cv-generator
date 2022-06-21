import { createAction, props } from '@ngrx/store';

export const setAlertsAction = createAction('[ALERT] set alerts', props<{ errors: string[] }>());
