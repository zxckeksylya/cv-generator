import { ActionReducerMap, createReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {
  prop: boolean;
}

export interface State {
  prop: AppState;
}
export const initioalState: AppState = {
  prop: true,
};

export const appReducer = createReducer(initioalState);

export const reducers: ActionReducerMap<State> = { prop: appReducer };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
