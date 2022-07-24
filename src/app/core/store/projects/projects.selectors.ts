import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState, PROJECTS_FEATURE_KEY } from './projects.reducers';

export const projectsFeatureSelector = createFeatureSelector<ProjectsState>(PROJECTS_FEATURE_KEY);

export const getProjectsSelector = createSelector(projectsFeatureSelector, (state) =>
  Object.values(state.projects),
);

export const getProjectByIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, props: { id: string }) => state.projects[props.id],
);

export const getIsInitProjectsSelector = createSelector(
  projectsFeatureSelector,
  (state) => state.isInitProjects,
);

export const getProjectsByResponsibilityIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, props: { id: string }) =>
    Object.values(state.projects).filter((item) => {
      for (const key of item.responsibilities) {
        if (key.id === props.id) {
          return true;
        }
      }
      return false;
    }),
);

export const getProjectsBySpecializationIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, props: { id: string }) =>
    Object.values(state.projects).filter((item) => {
      for (const key of item.specializations) {
        if (key.id === props.id) {
          return true;
        }
      }
      return false;
    }),
);

export const getProjectsByProjectRoleIdSelector = createSelector(
  projectsFeatureSelector,
  (state: ProjectsState, props: { id: string }) =>
    Object.values(state.projects).filter((item) => {
      for (const key of item.projectRoles) {
        if (key.id === props.id) {
          return true;
        }
      }
      return false;
    }),
);
