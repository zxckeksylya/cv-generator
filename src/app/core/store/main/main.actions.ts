import { createAction } from '@ngrx/store';

export const setLight = createAction('[MAIN] set light tema');
export const setDark = createAction('[MAIN] set dark tema');
export const changeLocalStorageTema = createAction('[MAIN] change local storage tema');
