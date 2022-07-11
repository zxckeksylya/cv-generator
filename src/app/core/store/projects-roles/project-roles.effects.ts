import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, take } from 'rxjs';
import { ProjectsRolesService } from '../../services/projects-roles.service';
import { AppState } from '../app.reducers';
import {
  getProjectRolesAction,
  getProjectRolesFailedAction,
  getProjectRolesSuccessAction,
  initProjectRolesStoreAction,
  initProjectRolesStoreFailedAction,
  initProjectRolesStoreSuccessAction,
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

  constructor(
    private actions$: Actions,
    private projectRolesService: ProjectsRolesService,
    private store: Store<AppState>,
  ) {}
}
