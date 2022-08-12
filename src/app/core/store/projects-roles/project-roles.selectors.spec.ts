import { INameId } from '../../interfaces/name-id.interface';
import { ProjectRolesState } from './project-roles.reducers';
import {
  getIsInitProjectRolesSelector,
  getProjectRoleByIdSelector,
  getProjectRolesSelector,
} from './project-roles.selectors';

describe('projectRolesSelectors', () => {
  const state: ProjectRolesState = {
    projectRoles: {
      id0: { id: 'id0', name: 'name' },
      id1: { id: 'id1', name: 'name' },
    },
    isInitProjectRoles: false,
  };
  it('should return projectRoles list', () => {
    const projectRoles: INameId[] = [
      { id: 'id0', name: 'name' },
      { id: 'id1', name: 'name' },
    ];
    const result = getProjectRolesSelector.projector(state);

    expect(result).toEqual(projectRoles);
  });

  it('should return isInit', () => {
    const result = getIsInitProjectRolesSelector.projector(state);

    expect(result).toEqual(state.isInitProjectRoles);
  });

  it('should return projectRole by id', () => {
    const id = 'id0';
    const projectRole: INameId = { id, name: 'name' };
    const result = getProjectRoleByIdSelector.projector(state, { id });
    expect(result).toEqual(projectRole);
  });
});
