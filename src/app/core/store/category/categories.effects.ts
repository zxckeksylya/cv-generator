import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, catchError, of } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { AppState } from '../app.reducers';
import {
  getCategoriesAction,
  getCategoriesFailedAction,
  getCategoriesSuccessAction,
  initCategoriesStoreAction,
  initCategoriesStoreFailedAction,
  initCategoriesStoreSuccessAction,
} from './categories.actions';
import { getIsInitCategoriesSelector } from './categories.selectors';

@Injectable()
export class CategoriesEffect {
  public initCategoriesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCategoriesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitCategoriesSelector),
          take(1),
          map((isInit) =>
            !isInit ? initCategoriesStoreSuccessAction() : initCategoriesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initCategoriesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCategoriesStoreSuccessAction),
      map(() => getCategoriesAction()),
    ),
  );

  public getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesAction),
      switchMap(() => this.categoriesService.getCategories()),
      map((categories) => getCategoriesSuccessAction({ categories })),
      catchError(() => of(getCategoriesFailedAction())),
    ),
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private store: Store<AppState>,
  ) {}
}
