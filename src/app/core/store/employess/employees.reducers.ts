import { createReducer, on } from '@ngrx/store';
import { EmployeeMap, GetEmployee } from '../../interfaces/employee.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import {
  clearEmployeesStoreAction,
  createEmployeeSuccessAction,
  getEmployeeByIdSuccessAction,
  getEmployeesSuccessAction,
} from './employees.actions';

export const EMPLOYEES_FEATURE_KEY = 'employees';

export interface EmployeesState {
  employees: EmployeeMap;
  isInitEmployees: boolean;
  activatedEmployee: string;
}

export const initialEmployeesState: EmployeesState = {
  employees: {},
  isInitEmployees: false,
  activatedEmployee: '',
};

export const employeesReducer = createReducer(
  initialEmployeesState,
  on(getEmployeesSuccessAction, (state, action) => ({
    ...state,
    isInitEmployees: true,
    employees: arrayToMap<GetEmployee>(action.employees, 'id'),
  })),
  on(getEmployeeByIdSuccessAction, (state, action) => ({
    ...state,
    employees: {
      ...state.employees,
      [action.employee.id]: action.employee,
    },
  })),
  on(createEmployeeSuccessAction, (state, action) => ({
    ...state,
    employees: {
      [action.employee.id]: action.employee,
      ...state.employees,
    },
  })),
  on(clearEmployeesStoreAction, () => ({
    ...initialEmployeesState,
  })),
);
