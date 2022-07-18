import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, switchMap, take } from 'rxjs';
import { LevelsService } from '../../services/levels.service';
import { AppState } from '../app.reducers';
import {
  createLevelAction,
  createLevelSuccessAction,
  deleteLevelAction,
  deleteLevelSuccessAction,
  getLevelByIdAction,
  getLevelByIdSuccessAction,
  getLevelsAction,
  getLevelsFailedAction,
  getLevelsSuccessAction,
  initLevelsStoreAction,
  initLevelsStoreFailedAction,
  initLevelsStoreSuccessAction,
  updateLevelAction,
  updateLevelSuccessAction,
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
      catchError(map(() => getLevelsFailedAction())),
    ),
  );

  public createLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLevelAction),
      switchMap((name) => this.levelsService.createLevel(name)),
      map((level) => createLevelSuccessAction({ level })),
    ),
  );

  public getLevelById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLevelByIdAction, updateLevelSuccessAction),
      switchMap((item) => this.levelsService.getLevelById(item.id)),
      map((level) => getLevelByIdSuccessAction({ level })),
    ),
  );

  public updateLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLevelAction),
      switchMap((level) => this.levelsService.updateLevel(level)),
      map((level) => updateLevelSuccessAction(level)),
    ),
  );

  public deleteLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLevelAction),
      switchMap((level) =>
        this.levelsService.deleteLevel(level).pipe(map(() => deleteLevelSuccessAction(level))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private levelsService: LevelsService,
    private store: Store<AppState>,
  ) {}
}
