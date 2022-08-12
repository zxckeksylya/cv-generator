import { AppState } from '../store/app.reducers';
import {
  AUTHORIZATION_FEATURE_KEY,
  initialAuthorizationState,
} from '../store/authorization/authorization.reducers';
import {
  BREADCRUMB_FEATURE_KEY,
  initialBreadcrumbState,
} from '../store/breadcrumb/breadcrumb.reducers';
import {
  CATEGORIES_FEATURE_KEY,
  initialCategoriesState,
} from '../store/category/categories.reducers';
import { CV_FEATURE_KEY, initialCVState } from '../store/cv/cv.reducers';
import {
  EMPLOYEES_FEATURE_KEY,
  initialEmployeesState,
} from '../store/employess/employees.reducers';
import { initialLanguagesState, LANGUAGE_FEATURE_KEY } from '../store/language/language.reducers';
import { initialLevelsState, LEVELS_FEATURE_KEY } from '../store/level/levels.reducers';
import {
  initialPageHeadingState,
  PAGE_HEADING_FEATURE_KEY,
} from '../store/page-heading/page-heading.reducers';
import {
  initialProjectRolesState,
  PROJECT_ROLES_FEATURE_KEY,
} from '../store/projects-roles/project-roles.reducers';
import { initialProjectsState, PROJECTS_FEATURE_KEY } from '../store/projects/projects.reducers';
import {
  initialResponsibilitiesState,
  RESPONSIBILITIES_FEATURE_KEY,
} from '../store/responsibilities/responsibilities.reducers';
import { initialRolesState, ROLES_FEATURE_KEY } from '../store/role/roles.reducers';
import { initialSkillsState, SKILLS_FEATURE_KEY } from '../store/skill/skills.reducers';
import {
  initialSpecializationsState,
  SPECIALIZATION_FEATURE_KEY,
} from '../store/specializations/specializations.reducers';
import { initialThemeState, THEME_FEATURE_KEY } from '../store/theme/theme.reducers';
import {
  initialVirtualCVsState,
  VIRTUAL_CV_FEATURE_KEY,
} from '../store/virtual-cv/virtual-cv.reducers';

export const createBaseAppState = (): AppState => ({
  [THEME_FEATURE_KEY]: initialThemeState,
  [BREADCRUMB_FEATURE_KEY]: initialBreadcrumbState,
  [PAGE_HEADING_FEATURE_KEY]: initialPageHeadingState,
  [AUTHORIZATION_FEATURE_KEY]: initialAuthorizationState,
  [SPECIALIZATION_FEATURE_KEY]: initialSpecializationsState,
  [RESPONSIBILITIES_FEATURE_KEY]: initialResponsibilitiesState,
  [PROJECT_ROLES_FEATURE_KEY]: initialProjectRolesState,
  [PROJECTS_FEATURE_KEY]: initialProjectsState,
  [EMPLOYEES_FEATURE_KEY]: initialEmployeesState,
  [ROLES_FEATURE_KEY]: initialRolesState,
  [CATEGORIES_FEATURE_KEY]: initialCategoriesState,
  [LANGUAGE_FEATURE_KEY]: initialLanguagesState,
  [LEVELS_FEATURE_KEY]: initialLevelsState,
  [SKILLS_FEATURE_KEY]: initialSkillsState,
  [CV_FEATURE_KEY]: initialCVState,
  [VIRTUAL_CV_FEATURE_KEY]: initialVirtualCVsState,
});
