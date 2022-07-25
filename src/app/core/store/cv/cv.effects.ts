import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { CVService } from '../../services/cvs.service';
import { AppState } from '../app.reducers';
import {
  createCVAction,
  createCVSuccessAction,
  getCVByIdAction,
  getCVByIdSuccessAction,
  getCVsAction,
  getCVsSuccessAction,
  initCVsStoreAction,
  initCVsStoreFailedAction,
  initCVsStoreSuccessAction,
  updateCVAction,
  updateCVSuccessAction,
} from './cv.actions';
import { getIsInitCVsSelector } from './cv.selectors';

@Injectable()
export class CVEffect {
  public initCVStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCVsStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitCVsSelector),
          take(1),
          map(isInit => (!isInit ? initCVsStoreSuccessAction() : initCVsStoreFailedAction())),
        ),
      ),
    ),
  );

  public initCvStoreSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCVsStoreSuccessAction),
      map(() => getCVsAction()),
    ),
  );

  public getCVs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCVsAction),
      switchMap(() => this.cvService.getCVs()),
      map(cvs => getCVsSuccessAction({ cvs })),
    ),
  );

  public getCVById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCVByIdAction, updateCVSuccessAction),
      switchMap(item => this.cvService.getCvById(item.id)),
      map(cv => getCVByIdSuccessAction({ cv })),
    ),
  );

  public createCv$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCVAction),
      switchMap(cv => this.cvService.createCV(cv)),
      switchMap(cv => this.cvService.getCvById(cv.id)),
      map(cv => createCVSuccessAction({ cv })),
    ),
  );

  public updateCv$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCVAction),
      switchMap(cv => this.cvService.updateCV(cv)),
      map(cv => updateCVSuccessAction(cv)),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private cvService: CVService,
  ) {}
}
