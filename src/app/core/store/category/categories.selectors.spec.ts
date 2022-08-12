import { INameId } from '../../interfaces/name-id.interface';
import { CategoriesState } from './categories.reducers';
import {
  getCategoriesSelector,
  getCategoryByIdSelector,
  getIsInitCategoriesSelector,
} from './categories.selectors';

describe('categoriesSelectors', () => {
  const state: CategoriesState = {
    categories: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitCategories: false,
  };
  it('should return categories list', () => {
    const categories: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getCategoriesSelector.projector(state);

    expect(result).toEqual(categories);
  });

  it('should return isInit', () => {
    const result = getIsInitCategoriesSelector.projector(state);

    expect(result).toEqual(state.isInitCategories);
  });

  it('should return category by id', () => {
    const id = 'id0';
    const category: INameId = { id, name: 'name' };
    const result = getCategoryByIdSelector.projector(state, { id });
    expect(result).toEqual(category);
  });
});
