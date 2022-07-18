import { createReducer, on } from '@ngrx/store';
import { INameId, INameIdMap } from '../../interfaces/name-id.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearCategoriesAction,
  createCategorySuccessAction,
  deleteCategorySuccessAction,
  getCategoriesSuccessAction,
  getCategoryByIdSuccessAction,
} from './categories.actions';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface CategoriesState {
  categories: INameIdMap;
  isInitCategories: boolean;
}

export const initialCategoriesState: CategoriesState = {
  categories: {},
  isInitCategories: false,
};

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(clearCategoriesAction, () => ({
    ...initialCategoriesState,
  })),
  on(getCategoriesSuccessAction, (state, action) => ({
    ...state,
    isInitCategories: true,
    categories: arrayToMap<INameId>(action.categories),
  })),
  on(createCategorySuccessAction, (state, action) => ({
    ...state,
    categories: {
      [action.category.id]: action.category,
      ...state.categories,
    },
  })),
  on(getCategoryByIdSuccessAction, (state, action) => ({
    ...state,
    categories: {
      ...state.categories,
      [action.category.id]: action.category,
    },
  })),
  on(deleteCategorySuccessAction, (state, action) => ({
    ...state,
    categories: deleteInMap<INameIdMap>(state.categories, action.id),
  })),
);
