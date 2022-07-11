import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, catchError } from 'rxjs';
import { ResponsibilitiesService } from '../../services/responsibilities.service';
import { AppState } from '../app.reducers';
import {
  getResponsibilitiesAction,
  getResponsibilitiesFailedAction,
  getResponsibilitiesSuccessAction,
  initResponsibilitiesStoreAction,
  initResponsibilitiesStoreFailedAction,
  initResponsibilitiesStoreSuccessAction,
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

  constructor(
    private actions$: Actions,
    private responsibilitiesService: ResponsibilitiesService,
    private store: Store<AppState>,
  ) {}
}
