import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, take } from 'rxjs';
import { ResponsibilitiesService } from '../../services/responsibilities.service';
import { AppState } from '../app.reducers';
import {
  createResponsibilityAction,
  createResponsibilitySuccessAction,
  deleteResponsibilityAction,
  deleteResponsibilitySuccessAction,
  getResponsibilitiesAction,
  getResponsibilitiesFailedAction,
  getResponsibilitiesSuccessAction,
  getResponsibilityByIdAction,
  getResponsibilityByIdSuccessAction,
  initResponsibilitiesStoreAction,
  initResponsibilitiesStoreFailedAction,
  initResponsibilitiesStoreSuccessAction,
  updateResponsibilityAction,
  updateResponsibilitySuccessAction,
} from './responsibilities.actions';
import { getIsInitResponsibilitiesSelector } from './responsibilities.selectors';

@Injectable()
export class ResponsibilitiesEffect {
  public initResponsibilitiesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initResponsibilitiesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitResponsibilitiesSelector),
          take(1),
          map((isInit) =>
            !isInit
              ? initResponsibilitiesStoreSuccessAction()
              : initResponsibilitiesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initResponsibilitiesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initResponsibilitiesStoreSuccessAction),
      map(() => getResponsibilitiesAction()),
    ),
  );

  public getResponsibilities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getResponsibilitiesAction),
      switchMap(() => this.responsibilitiesService.getResponsibilities()),
      map((responsibilities) => getResponsibilitiesSuccessAction({ responsibilities })),
      catchError(map(() => getResponsibilitiesFailedAction())),
    ),
  );

  public createResponsibility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createResponsibilityAction),
      switchMap((name) => this.responsibilitiesService.createResponsibility(name)),
      map((responsibility) => createResponsibilitySuccessAction({ responsibility })),
    ),
  );

  public getResponsibilityById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getResponsibilityByIdAction, updateResponsibilitySuccessAction),
      switchMap((item) => this.responsibilitiesService.getResponsibilityById(item.id)),
      map((responsibility) => getResponsibilityByIdSuccessAction({ responsibility })),
    ),
  );

  public updateResponsibility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateResponsibilityAction),
      switchMap((responsibility) =>
        this.responsibilitiesService.updateResponsibility(responsibility),
      ),
      map((responsibility) => updateResponsibilitySuccessAction(responsibility)),
    ),
  );

  public deleteResponsibility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteResponsibilityAction),
      switchMap((responsibility) =>
        this.responsibilitiesService
          .deleteResponsibility(responsibility)
          .pipe(map(() => deleteResponsibilitySuccessAction(responsibility))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private responsibilitiesService: ResponsibilitiesService,
    private store: Store<AppState>,
  ) {}
}
