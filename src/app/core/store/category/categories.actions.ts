import { createAction, props } from '@ngrx/store';
import { INameId } from '../../interfaces/name-id.interface';
import { Name } from '../../interfaces/name.interface';

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

export const createCategoryAction = createAction('[CATEGORIES] create category', props<Name>());

export const createCategorySuccessAction = createAction(
  '[CATEGORIES] success create category',
  props<{ category: INameId }>(),
);

export const getCategoryByIdAction = createAction(
  '[CATEGORIES] get category by id',
  props<{ id: string }>(),
);

export const getCategoryByIdSuccessAction = createAction(
  '[CATEGORIES] success get category by id',
  props<{ category: INameId }>(),
);

export const updateCategoryAction = createAction('[CATEGORIES] update category', props<INameId>());

export const updateCategorySuccessAction = createAction(
  '[CATEGORIES] success update category',
  props<{ id: string }>(),
);

export const deleteCategoryAction = createAction(
  '[CATEGORIES] delete category',
  props<{ id: string }>(),
);

export const deleteCategorySuccessAction = createAction(
  '[CATEGORIES] success delete category',
  props<{ id: string }>(),
);

export const clearCategoriesAction = createAction('[CATEGORIES] clear categories store');
