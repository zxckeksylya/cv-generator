import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { AppState } from '../app.reducers';
import {
  createCategoryAction,
  createCategorySuccessAction,
  deleteCategoryAction,
  deleteCategorySuccessAction,
  getCategoriesAction,
  getCategoriesFailedAction,
  getCategoriesSuccessAction,
  getCategoryByIdAction,
  getCategoryByIdSuccessAction,
  initCategoriesStoreAction,
  initCategoriesStoreFailedAction,
  initCategoriesStoreSuccessAction,
  updateCategoryAction,
  updateCategorySuccessAction,
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
          map(isInit =>
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
      map(categories => getCategoriesSuccessAction({ categories })),
      catchError(() => of(getCategoriesFailedAction())),
    ),
  );

  public createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCategoryAction),
      switchMap(name => this.categoriesService.createCategory(name)),
      map(category => createCategorySuccessAction({ category })),
    ),
  );

  public getCategoryById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoryByIdAction, updateCategorySuccessAction),
      switchMap(item => this.categoriesService.getCategoryById(item.id)),
      map(category => getCategoryByIdSuccessAction({ category })),
    ),
  );

  public updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCategoryAction),
      switchMap(category => this.categoriesService.updateCategory(category)),
      map(category => updateCategorySuccessAction(category)),
    ),
  );

  public deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCategoryAction),
      switchMap(category =>
        this.categoriesService
          .deleteCategory(category)
          .pipe(map(() => deleteCategorySuccessAction(category))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private store: Store<AppState>,
  ) {}
}
