import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { SpecializationsService } from '../../services/specializations.service';
import { AppState } from '../app.reducers';
import {
  initSpecializationsStoreAction,
  initSpecializationsStoreSuccessAction,
  initSpecializationsStoreFailedAction,
} from './specializations.actions';
import { getIsInitSpecializationsSelector } from './specializations.selectors';
import {
  getSpecializationsAction,
  getSpecializationsSuccessAction,
} from './specializations.actions';

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

  constructor(
    private actions$: Actions,
    private specializationsService: SpecializationsService,
    private store: Store<AppState>,
  ) {}
}
