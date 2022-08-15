import { INameId } from '../../interfaces/name-id.interface';
import { RolesState } from './roles.reducers';
import { getIsInitRolesSelector, getRoleByIdSelector, getRolesSelector } from './roles.selectors';

describe('rolesSelectors', () => {
  const state: RolesState = {
    roles: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitRoles: false,
  };
  it('should return roles list', () => {
    const roles: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getRolesSelector.projector(state);

    expect(result).toEqual(roles);
  });

  it('should return isInit', () => {
    const result = getIsInitRolesSelector.projector(state);

    expect(result).toEqual(state.isInitRoles);
  });

  it('should return role by id', () => {
    const id = 'id0';
    const role: INameId = { id, name: 'name' };
    const result = getRoleByIdSelector.projector(state, { id });
    expect(result).toEqual(role);
  });
});
