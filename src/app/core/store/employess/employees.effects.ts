import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { AppState } from '../app.reducers';
import {
  getEmployeesAction,
  getEmployeesSuccessAction,
  initEmployeesStoreAction,
  initEmployeesStoreFailedAction,
  initEmployeesStoreSuccessAction,
} from './employees.actions';
import { getIsInitEmployeesSelector } from './employees.selectors';

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

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private store: Store<AppState>,
  ) {}
}
