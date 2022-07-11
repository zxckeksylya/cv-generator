import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';
import {
  PAGE_HEADING_FEATURE_KEY,
  PageHeadingState,
  pageHeadingReducer,
} from './page-heading/page-heading.reducers';
import {
  responsibilitiesReducer,
  ResponsibilitiesState,
  RESPONSIBILITIES_FEATURE_KEY,
} from './responsibilities/responsibilities.reducers';
import {
  AUTHORIZATION_FEATURE_KEY,
  AuthorizationState,
  authorizationReducer,
} from './authorization/authorization.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
  [PAGE_HEADING_FEATURE_KEY]: PageHeadingState;
  [AUTHORIZATION_FEATURE_KEY]: AuthorizationState;
  [SPECIALIZATION_FEATURE_KEY]: SpecializationsState;
  [RESPONSIBILITIES_FEATURE_KEY]: ResponsibilitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
  [PAGE_HEADING_FEATURE_KEY]: pageHeadingReducer,
  [AUTHORIZATION_FEATURE_KEY]: authorizationReducer,
  [SPECIALIZATION_FEATURE_KEY]: specializationsReducer,
  [RESPONSIBILITIES_FEATURE_KEY]: responsibilitiesReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
