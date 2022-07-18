import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState, CATEGORIES_FEATURE_KEY } from './categories.reducers';

export const categoriesFeatureSelector =
  createFeatureSelector<CategoriesState>(CATEGORIES_FEATURE_KEY);

export const getCategoriesSelector = createSelector(categoriesFeatureSelector, (state) =>
  Object.values(state.categories),
);

export const getIsInitCategoriesSelector = createSelector(
  categoriesFeatureSelector,
  (state) => state.isInitCategories,
);

export const getCategoryByIdSelector = createSelector(
  categoriesFeatureSelector,
  (state: CategoriesState, props: { id: string }) => state.categories[props.id],
);
