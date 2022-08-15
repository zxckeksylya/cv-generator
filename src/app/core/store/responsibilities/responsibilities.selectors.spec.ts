import { INameId } from '../../interfaces/name-id.interface';
import { ResponsibilitiesState } from './responsibilities.reducers';
import {
  getIsInitResponsibilitiesSelector,
  getResponsibilitiesSelector,
  getResponsibilityByIdSelector,
} from './responsibilities.selectors';

describe('responsibilitiesSelectors', () => {
  const state: ResponsibilitiesState = {
    responsibilities: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitResponsibilities: false,
  };
  it('should return responsibilities list', () => {
    const responsibilities: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getResponsibilitiesSelector.projector(state);

    expect(result).toEqual(responsibilities);
  });

  it('should return isInit', () => {
    const result = getIsInitResponsibilitiesSelector.projector(state);

    expect(result).toEqual(state.isInitResponsibilities);
  });

  it('should return responsibility by id', () => {
    const id = 'id0';
    const responsibility: INameId = { id, name: 'name' };
    const result = getResponsibilityByIdSelector.projector(state, { id });
    expect(result).toEqual(responsibility);
  });
});
