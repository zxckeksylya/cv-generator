import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { AppState } from '../app.reducers';
import {
  createEmployeeAction,
  createEmployeeSuccessAction,
  getEmployeeByIdSuccessAction,
  getEmployeesAction,
  getEmployeesSuccessAction,
  initEmployeesStoreAction,
  initEmployeesStoreFailedAction,
  initEmployeesStoreSuccessAction,
} from './employees.actions';
import { getIsInitEmployeesSelector } from './employees.selectors';
import {
  getEmployeeByIdAction,
  updateEmployeeSuccessAction,
  updateEmployeeAction,
} from './employees.actions';

@Injectable()
export class EmployeesEffect {
  public initEmployeesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEmployeesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitEmployeesSelector),
          take(1),
          map((isInit) =>
            !isInit ? initEmployeesStoreSuccessAction() : initEmployeesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initEmployeesStoreSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEmployeesStoreSuccessAction),
      map(() => getEmployeesAction()),
    ),
  );

  public getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployeesAction),
      switchMap(() => this.employeeService.getEmployees()),
      map((employees) => getEmployeesSuccessAction({ employees })),
    ),
  );

  public getEmployeeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployeeByIdAction, updateEmployeeSuccessAction),
      switchMap((item) => this.employeeService.getEmployeeById(item.id)),
      map((employee) => getEmployeeByIdSuccessAction({ employee })),
    ),
  );

  public createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeAction),
      switchMap((employee) => this.employeeService.createEmployee(employee)),
      switchMap((employee) => this.employeeService.getEmployeeById(employee.id)),
      map((employee) => createEmployeeSuccessAction({ employee })),
    ),
  );

  public updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployeeAction),
      switchMap((employee) => this.employeeService.updateEmployee(employee)),
      map((employee) => updateEmployeeSuccessAction(employee)),
    ),
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private store: Store<AppState>,
  ) {}
}
