import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CATEGORIES_FEATURE_KEY } from './categories.reducers';
import { CategoriesState } from './categories.reducers';

export const categoriesFeatureSelector =
  createFeatureSelector<CategoriesState>(CATEGORIES_FEATURE_KEY);

export const getCategoriesSelector = createSelector(
  categoriesFeatureSelector,
  (state) => state.categories,
);

export const getIsInitCategoriesSelector = createSelector(
  categoriesFeatureSelector,
  (state) => state.isInitCategories,
);
