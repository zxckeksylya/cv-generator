import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, catchError } from 'rxjs';
import { RolesService } from '../../services/roles.service';
import { AppState } from '../app.reducers';
import {
  getRolesAction,
  getRolesFailedAction,
  getRolesSuccessAction,
  initRolesStoreAction,
  initRolesStoreFailedAction,
  initRolesStoreSuccessAction,
} from './roles.actions';
import { getIsInitRolesSelector } from './roles.selectors';

@Injectable()
export class RolesEffect {
  public initRolesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initRolesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitRolesSelector),
          take(1),
          map((isInit) => (!isInit ? initRolesStoreSuccessAction() : initRolesStoreFailedAction())),
        ),
      ),
    ),
  );

  public initRolesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initRolesStoreSuccessAction),
      map(() => getRolesAction()),
    ),
  );

  public getRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolesAction),
      switchMap(() => this.rolesService.getRoles()),
      map((roles) => getRolesSuccessAction({ roles })),
      catchError(map(() => getRolesFailedAction())),
    ),
  );

  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store<AppState>,
  ) {}
}
