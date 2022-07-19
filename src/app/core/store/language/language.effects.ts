import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getLanguagesSuccessAction,
  initLanguagesStoreAction,
  initLanguagesStoreFailedAction,
  initLanguagesStoreSuccessAction,
} from './language.actions';
import { AppState } from '../app.reducers';
import { select, Store } from '@ngrx/store';
import { LanguagesService } from '../../services/languages.service';
import { map, switchMap, take, catchError, of } from 'rxjs';
import { getIsInitLanguagesSelector } from './language.selectors';
import { getLanguagesAction, getLanguagesFailedAction } from './language.actions';

@Injectable()
export class LanguagesEffect {
  public initLanguagesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLanguagesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitLanguagesSelector),
          take(1),
          map((isInit) =>
            !isInit ? initLanguagesStoreSuccessAction() : initLanguagesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initLanguagesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLanguagesStoreSuccessAction),
      map(() => getLanguagesAction()),
    ),
  );

  public getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguagesAction),
      switchMap(() => this.languagesService.getLanguages()),
      map((languages) => getLanguagesSuccessAction({ languages })),
      catchError(() => of(getLanguagesFailedAction())),
    ),
  );

  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService,
    private store: Store<AppState>,
  ) {}
}
