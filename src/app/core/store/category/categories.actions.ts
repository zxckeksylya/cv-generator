import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';

export const initCategoriesStoreAction = createAction('[CATEGORIES] init categories');

export const initCategoriesStoreSuccessAction = createAction(
  '[CATEGORIES] success init categories',
);

export const initCategoriesStoreFailedAction = createAction('[CATEGORIES] failed init categories');

export const getCategoriesAction = createAction('[CATEGORIES] get categories list');

export const getCategoriesSuccessAction = createAction(
  '[CATEGORIES] success get categories list',
  props<{ categories: INameId[] }>(),
);

export const getCategoriesFailedAction = createAction('[CATEGORIES] failed get categories list');

export const clearCategoriesAction = createAction('[CATEGORIES] clear categories store');
