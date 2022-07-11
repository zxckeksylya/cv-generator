import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import {
  authorizationReducer,
  AuthorizationState,
  AUTHORIZATION_FEATURE_KEY,
} from './authorization/authorization.reducers';
import {
  breadcrumbReducer,
  BreadcrumbState,
  BREADCRUMB_FEATURE_KEY,
} from './breadcrumb/breadcrumb.reducers';
import {
  pageHeadingReducer,
  PageHeadingState,
  PAGE_HEADING_FEATURE_KEY,
} from './page-heading/page-heading.reducers';
import {
  projectRolesReducer,
  ProjectRolesState,
  PROJECT_ROLES_FEATURE_KEY,
} from './projects-roles/project-roles.reducers';
import { projectsReducer, ProjectsState, PROJECTS_FEATURE_KEY } from './projects/projects.reducers';
import {
  responsibilitiesReducer,
  ResponsibilitiesState,
  RESPONSIBILITIES_FEATURE_KEY,
} from './responsibilities/responsibilities.reducers';
import {
  specializationsReducer,
  SpecializationsState,
  SPECIALIZATION_FEATURE_KEY,
} from './specializations/specializations.reducers';
import { themeReducer, ThemeState, THEME_FEATURE_KEY } from './theme/theme.reducers';

export interface AppState {
  [THEME_FEATURE_KEY]: ThemeState;
  [BREADCRUMB_FEATURE_KEY]: BreadcrumbState;
  [PAGE_HEADING_FEATURE_KEY]: PageHeadingState;
  [AUTHORIZATION_FEATURE_KEY]: AuthorizationState;
  [SPECIALIZATION_FEATURE_KEY]: SpecializationsState;
  [RESPONSIBILITIES_FEATURE_KEY]: ResponsibilitiesState;
  [PROJECT_ROLES_FEATURE_KEY]: ProjectRolesState;
  [PROJECTS_FEATURE_KEY]: ProjectsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [THEME_FEATURE_KEY]: themeReducer,
  [BREADCRUMB_FEATURE_KEY]: breadcrumbReducer,
  [PAGE_HEADING_FEATURE_KEY]: pageHeadingReducer,
  [AUTHORIZATION_FEATURE_KEY]: authorizationReducer,
  [SPECIALIZATION_FEATURE_KEY]: specializationsReducer,
  [RESPONSIBILITIES_FEATURE_KEY]: responsibilitiesReducer,
  [PROJECT_ROLES_FEATURE_KEY]: projectRolesReducer,
  [PROJECTS_FEATURE_KEY]: projectsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
