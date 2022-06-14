import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';
import { LANGUAGE_FEATURE_KEY, LanguageState, LanguageReducer } from './language/language.reducers';
import {
  BREADCRUMB_FEATURE_KEY,
  BreadcrumbState,
  breadcrumbReducer,
} from './breadcrumb/breadcrumb.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [LANGUAGE_FEATURE_KEY]: LanguageState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [LANGUAGE_FEATURE_KEY]: LanguageReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
