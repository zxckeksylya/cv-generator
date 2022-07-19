import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, catchError, of } from 'rxjs';
import { LevelsService } from '../../services/levels.service';
import { AppState } from '../app.reducers';
import {
  getLevelsAction,
  getLevelsFailedAction,
  getLevelsSuccessAction,
  initLevelsStoreAction,
  initLevelsStoreFailedAction,
  initLevelsStoreSuccessAction,
} from './levels.actions';
import { getIsInitLevelsSelector } from './levels.selectors';

@Injectable()
export class LevelsEffect {
  public initLevelsStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLevelsStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitLevelsSelector),
          take(1),
          map((isInit) =>
            !isInit ? initLevelsStoreSuccessAction() : initLevelsStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initLevelsSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLevelsStoreSuccessAction),
      map(() => getLevelsAction()),
    ),
  );

  public getLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLevelsAction),
      switchMap(() => this.levelsService.getLevels()),
      map((levels) => getLevelsSuccessAction({ levels })),
      catchError(() => of(getLevelsFailedAction())),
    ),
  );

  constructor(
    private actions$: Actions,
    private levelsService: LevelsService,
    private store: Store<AppState>,
  ) {}
}
