import { INameId } from '../../interfaces/name-id.interface';
import { SpecializationsState } from './specializations.reducers';
import {
  getIsInitSpecializationsSelector,
  getSpecializationByIdSelector,
  getSpecializationsSelector,
} from './specializations.selectors';

describe('specializationsSelectors', () => {
  const state: SpecializationsState = {
    specializations: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitSpecializations: false,
  };
  it('should return specializations list', () => {
    const specializations: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getSpecializationsSelector.projector(state);

    expect(result).toEqual(specializations);
  });

  it('should return isInit', () => {
    const result = getIsInitSpecializationsSelector.projector(state);

    expect(result).toEqual(state.isInitSpecializations);
  });

  it('should return specialization by id', () => {
    const id = 'id0';
    const specialization: INameId = { id, name: 'name' };
    const result = getSpecializationByIdSelector.projector(state, { id });
    expect(result).toEqual(specialization);
  });
});
