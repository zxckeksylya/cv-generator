import { INameId } from '../../interfaces/name-id.interface';
import { LevelsState } from './levels.reducers';
import {
  getIsInitLevelsSelector,
  getLevelByIdSelector,
  getLevelsSelector,
} from './levels.selectors';

describe('levelsSelectors', () => {
  const state: LevelsState = {
    levels: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitLevels: false,
  };
  it('should return levels list', () => {
    const levels: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getLevelsSelector.projector(state);

    expect(result).toEqual(levels);
  });

  it('should return isInit', () => {
    const result = getIsInitLevelsSelector.projector(state);

    expect(result).toEqual(state.isInitLevels);
  });

  it('should return level by id', () => {
    const id = 'id0';
    const level: INameId = { id, name: 'name' };
    const result = getLevelByIdSelector.projector(state, { id });
    expect(result).toEqual(level);
  });
});
