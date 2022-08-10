import { INameId } from '../../interfaces/name-id.interface';
import {
  clearCategoriesAction,
  createCategorySuccessAction,
  deleteCategorySuccessAction,
  getCategoriesSuccessAction,
  getCategoryByIdSuccessAction,
} from './categories.actions';
import { categoriesReducer, CategoriesState, initialCategoriesState } from './categories.reducers';

fdescribe('categoriesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = categoriesReducer(initialCategoriesState, action);

      expect(state).toBe(initialCategoriesState);
    });
  });

  describe('clearCategories action', () => {
    it('should clear state', () => {
      const action = clearCategoriesAction;
      const state = categoriesReducer(initialCategoriesState, action);

      expect(state).toEqual(initialCategoriesState);
    });
  });

  describe('getCategoriesSuccessAction', () => {
    it('should set categories in state', () => {
      const categories: INameId[] = [{ id: 'id', name: 'name' }];
      const newState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'name' },
        },
        isInitCategories: true,
      };
      const action = getCategoriesSuccessAction({ categories });
      const state = categoriesReducer(initialCategoriesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialCategoriesState);
    });
  });

  describe('createCategorySuccessAction', () => {
    it('should set created category in state', () => {
      const category: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: CategoriesState = {
        categories: {
          old: { id: 'old', name: 'name' },
        },
        isInitCategories: true,
      };
      const newState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'name' },
        },
        isInitCategories: true,
      };
      const action = createCategorySuccessAction({ category });
      const state = categoriesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('getCategoryByIdSuccessAction', () => {
    it('should set updated category in state', () => {
      const category: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'old' },
        },
        isInitCategories: true,
      };
      const newState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'newName' },
        },
        isInitCategories: true,
      };
      const action = getCategoryByIdSuccessAction({ category });
      const state = categoriesReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new category in state', () => {
      const category: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: CategoriesState = {
        categories: {
          old: { id: 'old', name: 'old' },
        },
        isInitCategories: true,
      };
      const newState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitCategories: true,
      };

      const action = getCategoryByIdSuccessAction({ category });
      const state = categoriesReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('deleteCategorySuccessAction', () => {
    it('should delete category in state', () => {
      const category: INameId = { id: 'old', name: 'old' };
      const oldState: CategoriesState = {
        categories: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'name' },
        },
        isInitCategories: true,
      };
      const newState: CategoriesState = {
        categories: {
          id: { id: 'id', name: 'name' },
        },
        isInitCategories: true,
      };
      const action = deleteCategorySuccessAction({ id: category.id });
      const state = categoriesReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
