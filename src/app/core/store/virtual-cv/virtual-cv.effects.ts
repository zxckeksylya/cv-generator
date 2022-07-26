import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { VirtualCVService } from '../../services/virtual-cv.service';
import { AppState } from '../app.reducers';
import {
  createVirtualCVAction,
  createVirtualCVSuccessAction,
  getVirtualCVByIdAction,
  getVirtualCVByIdSuccessAction,
  getVirtualCVsAction,
  getVirtualCVsFailedAction,
  getVirtualCVsSuccessAction,
  initVirtualCVFailedStoreAction,
  initVirtualCVStoreAction,
  initVirtualCVSuccessStoreAction,
  updateVirtualCVAction,
  updateVirtualCVSuccessAction,
} from './virtual-cv.actions';
import { getIsInitVirtualCVsSelector } from './virtual-cv.selectors';

@Injectable()
export class VirtualCVEffect {
  public initVirtualCVStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initVirtualCVStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitVirtualCVsSelector),
          take(1),
          map(isInit =>
            !isInit ? initVirtualCVSuccessStoreAction() : initVirtualCVFailedStoreAction(),
          ),
        ),
      ),
    ),
  );

  public initVirtualCvSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initVirtualCVSuccessStoreAction),
      map(() => getVirtualCVsAction()),
    ),
  );

  public getVirtualCVs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVirtualCVsAction),
      switchMap(() => this.virtualCVService.getVirtualCVs()),
      map(virtualCvs => getVirtualCVsSuccessAction({ virtualCvs })),
      catchError(() => of(getVirtualCVsFailedAction())),
    ),
  );

  public createVirtualCV$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createVirtualCVAction),
      switchMap(virtualCV => this.virtualCVService.createVirtualCV(virtualCV.virtualCV)),
      map(virtualCV => createVirtualCVSuccessAction({ virtualCV })),
    ),
  );

  public getVirtualCvById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVirtualCVByIdAction, updateVirtualCVSuccessAction),
      switchMap(item => this.virtualCVService.getVirtualCVById(item.id)),
      map(virtualCV => getVirtualCVByIdSuccessAction({ virtualCV })),
    ),
  );

  public updateVirtualCV$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVirtualCVAction),
      switchMap(virtualCv => this.virtualCVService.updateVirtualCV(virtualCv.virtualCV)),
      map(virtualCV => updateVirtualCVSuccessAction(virtualCV)),
    ),
  );

  constructor(
    private virtualCVService: VirtualCVService,
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}
}
