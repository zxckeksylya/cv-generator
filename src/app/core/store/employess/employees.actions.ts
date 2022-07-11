import { createAction, props } from '@ngrx/store';
import { GetEmployee } from '../../interfaces/employee.interface';

export const initEmployeesStoreAction = createAction('[EMPLOYEES] init employees');

export const initEmployeesStoreSuccessAction = createAction('[EMPLOYEES] success init employees');

export const initEmployeesStoreFailedAction = createAction('[EMPLOYEES] failed init employees');

export const getEmployeesAction = createAction('[EMPLOYEES] get employees list');

export const getEmployeesSuccessAction = createAction(
  '[EMPLOYEES] success get employees list',
  props<{ employees: GetEmployee[] }>(),
);

export const getEmployeeByIdAction = createAction(
  '[PROJECTS] get employee by id',
  props<{ id: string }>(),
);

export const getEmployeeByIdSuccessAction = createAction(
  '[PROJECTS] success get employee by id',
  props<{ employee: GetEmployee }>(),
);

export const createEmployeeAction = createAction('[PROJECTS] create employee');

export const createEmployeeSuccessAction = createAction('[PROJECTS] success create employee');

export const updateEmployeeAction = createAction('[PROJECTS] update employee');

export const updateEmployeeSuccessAction = createAction('[PROJECTS] success update employee');

export const deleteEmployeeAction = createAction('[PROJECTS] delete Employee');

export const deleteEmployeeSuccessAction = createAction('[PROJECTS] success delete employee');

export const clearEmployeesStoreAction = createAction('[PROJECTS] clear employees store');
