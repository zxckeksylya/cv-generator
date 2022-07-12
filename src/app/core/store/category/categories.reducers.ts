import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import { clearCategoriesAction, getCategoriesSuccessAction } from './categories.actions';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface CategoriesState {
  categories: INameId[];
  isInitCategories: boolean;
}

export const initialCategoriesState: CategoriesState = {
  categories: [],
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
    categories: action.categories,
  })),
);
