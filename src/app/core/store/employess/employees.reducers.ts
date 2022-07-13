import { createReducer, on } from '@ngrx/store';
import { EmployeeMap, GetEmployee } from '../../interfaces/employee.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { getEmployeesSuccessAction } from './employees.actions';

export const EMPLOYEES_FEATURE_KEY = 'employees';

export interface EmployeesState {
  employees: EmployeeMap;
  isInitEmployees: boolean;
}

export const initialEmployeesState: EmployeesState = {
  employees: {},
  isInitEmployees: false,
};

export const employeesReducer = createReducer(
  initialEmployeesState,
  on(getEmployeesSuccessAction, (state, action) => ({
    ...state,
    isInitEmployees: true,
    employees: arrayToMap<GetEmployee>(action.employees),
  })),
);
