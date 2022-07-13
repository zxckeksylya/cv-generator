import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesState, EMPLOYEES_FEATURE_KEY } from './employees.reducers';

export const employeesFeatureSelector =
  createFeatureSelector<EmployeesState>(EMPLOYEES_FEATURE_KEY);

export const getEmployeesSelector = createSelector(employeesFeatureSelector, (state) =>
  Object.values(state.employees),
);

export const getIsInitEmployeesSelector = createSelector(
  employeesFeatureSelector,
  (state) => state.isInitEmployees,
);
