import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';
import {
  PAGE_HEADING_FEATURE_KEY,
  PageHeadingState,
  pageHeadingReducer,
} from './page-heading/page-heading.reducers';
import {
  BREADCRUMB_FEATURE_KEY,
  BreadcrumbState,
  breadcrumbReducer,
} from './breadcrumb/breadcrumb.reducers';
import { ALERT_FEATURE_KEY, AlertState, alertReducer } from './alert/alert.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
  [PAGE_HEADING_FEATURE_KEY]: PageHeadingState;
  [ALERT_FEATURE_KEY]: AlertState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
  [PAGE_HEADING_FEATURE_KEY]: pageHeadingReducer,
  [ALERT_FEATURE_KEY]: alertReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
