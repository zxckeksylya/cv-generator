import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { TemaState, temaReducer } from './main/main.reducers';

export interface State {
  tema: TemaState;
}

export const reducers: ActionReducerMap<State> = { tema: temaReducer };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
