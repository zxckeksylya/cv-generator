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
import {
  AUTHORIZATION_FEATURE_KEY,
  AuthorizationState,
  authorizationReducer,
} from './authorization/authorization.reducers';
import { PROJECTS_FEATURE_KEY, ProjectsState, projectsReducer } from './projects/projects.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
  [PAGE_HEADING_FEATURE_KEY]: PageHeadingState;
  [AUTHORIZATION_FEATURE_KEY]: AuthorizationState;
  [PROJECTS_FEATURE_KEY]: ProjectsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
  [PAGE_HEADING_FEATURE_KEY]: pageHeadingReducer,
  [AUTHORIZATION_FEATURE_KEY]: authorizationReducer,
  [PROJECTS_FEATURE_KEY]: projectsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
