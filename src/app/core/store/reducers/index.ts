import { ActionReducerMap, createReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { BaseState } from './baseState';
import { State } from './State';

export const initionalState: BaseState = {
  prop: true,
};

export const baceReducer = createReducer(initionalState);

export const reducers: ActionReducerMap<State> = { prop: baceReducer };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
