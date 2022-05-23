import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
}

export const reducers: ActionReducerMap<AppState> = { [THEME_FEATURE_KEY]: themeReducer };

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
