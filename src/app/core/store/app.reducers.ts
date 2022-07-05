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
import {
  PROJECT_ROLES_FEATURE_KEY,
  ProjectRolesState,
  projectRolesReducer,
} from './projects-roles/project-roles.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
  [PAGE_HEADING_FEATURE_KEY]: PageHeadingState;
  [AUTHORIZATION_FEATURE_KEY]: AuthorizationState;
  [PROJECT_ROLES_FEATURE_KEY]: ProjectRolesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
  [PAGE_HEADING_FEATURE_KEY]: pageHeadingReducer,
  [AUTHORIZATION_FEATURE_KEY]: authorizationReducer,
  [PROJECT_ROLES_FEATURE_KEY]: projectRolesReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
