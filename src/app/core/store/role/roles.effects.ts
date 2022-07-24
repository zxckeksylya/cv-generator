import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { RolesService } from '../../services/roles.service';
import { AppState } from '../app.reducers';
import {
  createRoleAction,
  createRoleSuccessAction,
  deleteRoleAction,
  deleteRoleSuccessAction,
  getRoleByIdAction,
  getRoleByIdSuccessAction,
  getRolesAction,
  getRolesFailedAction,
  getRolesSuccessAction,
  initRolesStoreAction,
  initRolesStoreFailedAction,
  initRolesStoreSuccessAction,
  updateRoleAction,
  updateRoleSuccessAction,
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
          map(isInit => (!isInit ? initRolesStoreSuccessAction() : initRolesStoreFailedAction())),
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
      map(roles => getRolesSuccessAction({ roles })),
      catchError(() => of(getRolesFailedAction())),
    ),
  );

  public createRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRoleAction),
      switchMap(name => this.rolesService.createRole(name)),
      map(role => createRoleSuccessAction({ role })),
    ),
  );

  public getRoleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRoleByIdAction, updateRoleSuccessAction),
      switchMap(item => this.rolesService.getRoleById(item.id)),
      map(role => getRoleByIdSuccessAction({ role })),
    ),
  );

  public updateRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRoleAction),
      switchMap(role => this.rolesService.updateRole(role)),
      map(role => updateRoleSuccessAction(role)),
    ),
  );

  public deleteRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRoleAction),
      switchMap(role =>
        this.rolesService.deleteRole(role).pipe(map(() => deleteRoleSuccessAction(role))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store<AppState>,
  ) {}
}
