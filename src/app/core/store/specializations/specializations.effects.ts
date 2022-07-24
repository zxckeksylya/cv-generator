import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { SpecializationsService } from '../../services/specializations.service';
import { AppState } from '../app.reducers';
import {
  createSpecializationAction,
  createSpecializationSuccessAction,
  deleteSpecializationAction,
  deleteSpecializationSuccessAction,
  getSpecializationByIdAction,
  getSpecializationByIdSuccessAction,
  getSpecializationsAction,
  getSpecializationsSuccessAction,
  initSpecializationsStoreAction,
  initSpecializationsStoreFailedAction,
  initSpecializationsStoreSuccessAction,
  updateSpecializationAction,
  updateSpecializationSuccessAction,
} from './specializations.actions';
import { getIsInitSpecializationsSelector } from './specializations.selectors';

@Injectable()
export class SpecializationsEffect {
  public initSpecializationsStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initSpecializationsStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitSpecializationsSelector),
          take(1),
          map((isInit) =>
            !isInit
              ? initSpecializationsStoreSuccessAction()
              : initSpecializationsStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initSpecializationsSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initSpecializationsStoreSuccessAction),
      map(() => getSpecializationsAction()),
    ),
  );

  public getSpecializations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecializationsAction),
      switchMap(() => this.specializationsService.getSpecializations()),
      map((specializations) => getSpecializationsSuccessAction({ specializations })),
    ),
  );

  public createSpecialization$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSpecializationAction),
      switchMap((name) => this.specializationsService.createSpecialization(name)),
      map((specialization) => createSpecializationSuccessAction({ specialization })),
    ),
  );

  public getSpecializationById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecializationByIdAction, updateSpecializationSuccessAction),
      switchMap((item) => this.specializationsService.getSpecializationById(item.id)),
      map((specialization) => getSpecializationByIdSuccessAction({ specialization })),
    ),
  );

  public updateSpecialization$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSpecializationAction),
      switchMap((specialization) =>
        this.specializationsService.updateSpecialization(specialization),
      ),
      map((specialization) => updateSpecializationSuccessAction(specialization)),
    ),
  );

  public deleteSpecialization$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSpecializationAction),
      switchMap((specialization) =>
        this.specializationsService
          .deleteSpecialization(specialization)
          .pipe(map(() => deleteSpecializationSuccessAction(specialization))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private specializationsService: SpecializationsService,
    private store: Store<AppState>,
  ) {}
}
