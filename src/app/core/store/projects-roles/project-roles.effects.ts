import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, take } from 'rxjs';
import { ProjectsRolesService } from '../../services/projects-roles.service';
import { AppState } from '../app.reducers';
import {
  createProjectRoleAction,
  createProjectRoleSuccessAction,
  deleteProjectRoleAction,
  deleteProjectRoleSuccessAction,
  getProjectRoleByIdAction,
  getProjectRoleByIdSuccessAction,
  getProjectRolesAction,
  getProjectRolesFailedAction,
  getProjectRolesSuccessAction,
  initProjectRolesStoreAction,
  initProjectRolesStoreFailedAction,
  initProjectRolesStoreSuccessAction,
  updateProjectRoleAction,
  updateProjectRoleSuccessAction,
} from './project-roles.actions';
import { getIsInitProjectRolesSelector } from './project-roles.selectors';

@Injectable()
export class ProjectRolesEffect {
  public initProjectRolesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProjectRolesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitProjectRolesSelector),
          take(1),
          map((isInit) =>
            !isInit ? initProjectRolesStoreSuccessAction() : initProjectRolesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initProjectRolesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProjectRolesStoreSuccessAction),
      map(() => getProjectRolesAction()),
    ),
  );

  public getProjectRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectRolesAction),
      switchMap(() => this.projectRolesService.getProjectsRoles()),
      map((projectRoles) => getProjectRolesSuccessAction({ projectRoles })),
      catchError(map(() => getProjectRolesFailedAction())),
    ),
  );

  public createProjectRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProjectRoleAction),
      switchMap((name) => this.projectRolesService.createProjectRole(name)),
      map((projectRole) => createProjectRoleSuccessAction({ projectRole })),
    ),
  );

  public getProjectRoleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectRoleByIdAction, updateProjectRoleSuccessAction),
      switchMap((item) => this.projectRolesService.getProjectRoleById(item.id)),
      map((projectRole) => getProjectRoleByIdSuccessAction({ projectRole })),
    ),
  );

  public updateProjectRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProjectRoleAction),
      switchMap((projectRole) => this.projectRolesService.updateProjectRole(projectRole)),
      map((projectRole) => updateProjectRoleSuccessAction(projectRole)),
    ),
  );

  public deleteProjectRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProjectRoleAction),
      switchMap((projectRole) =>
        this.projectRolesService
          .deleteProjectRole(projectRole)
          .pipe(map(() => deleteProjectRoleSuccessAction(projectRole))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private projectRolesService: ProjectsRolesService,
    private store: Store<AppState>,
  ) {}
}
