import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';
import {
  BREADCRUMB_FEATURE_KEY,
  BreadcrumbState,
  breadcrumbReducer,
} from './breadcrumb/breadcrumb.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
