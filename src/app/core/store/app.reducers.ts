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
  categoriesReducer,
  CategoriesState,
  CATEGORIES_FEATURE_KEY,
} from './category/categories.reducers';
import {
  employeesReducer,
  EmployeesState,
  EMPLOYEES_FEATURE_KEY,
} from './employess/employees.reducers';
import {
  languagesReducer,
  LanguagesState,
  LANGUAGE_FEATURE_KEY,
} from './language/language.reducers';
import { levelsReducer, LevelsState, LEVELS_FEATURE_KEY } from './level/levels.reducers';
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
import { rolesReducer, RolesState, ROLES_FEATURE_KEY } from './role/roles.reducers';
import { SKILLS_FEATURE_KEY, SkillsState, skillsReducer } from './skill/skills.reducers';
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
  [EMPLOYEES_FEATURE_KEY]: EmployeesState;
  [ROLES_FEATURE_KEY]: RolesState;
  [CATEGORIES_FEATURE_KEY]: CategoriesState;
  [LANGUAGE_FEATURE_KEY]: LanguagesState;
  [LEVELS_FEATURE_KEY]: LevelsState;
  [SKILLS_FEATURE_KEY]: SkillsState;
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
  [EMPLOYEES_FEATURE_KEY]: employeesReducer,
  [ROLES_FEATURE_KEY]: rolesReducer,
  [CATEGORIES_FEATURE_KEY]: categoriesReducer,
  [LANGUAGE_FEATURE_KEY]: languagesReducer,
  [LEVELS_FEATURE_KEY]: levelsReducer,
  [SKILLS_FEATURE_KEY]: skillsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
