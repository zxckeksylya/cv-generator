import { INameId } from '../../interfaces/name-id.interface';
import {
  clearProjectRolesAction,
  createProjectRoleSuccessAction,
  deleteProjectRoleSuccessAction,
  getProjectRoleByIdSuccessAction,
  getProjectRolesSuccessAction,
} from './project-roles.actions';
import {
  initialProjectRolesState,
  projectRolesReducer,
  ProjectRolesState,
} from './project-roles.reducers';

describe('projectRolesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = projectRolesReducer(initialProjectRolesState, action);

      expect(state).toBe(initialProjectRolesState);
    });
  });

  describe('clearProjectRolesAction', () => {
    it('should clear state', () => {
      const action = clearProjectRolesAction;
      const state = projectRolesReducer(initialProjectRolesState, action);

      expect(state).toEqual(initialProjectRolesState);
    });
  });

  describe('getProjectRolesSuccessAction', () => {
    it('should set projectRoles in state', () => {
      const projectRoles: INameId[] = [{ id: 'id', name: 'name' }];
      const newState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'name' },
        },
        isInitProjectRoles: true,
      };

      const action = getProjectRolesSuccessAction({ projectRoles });
      const state = projectRolesReducer(initialProjectRolesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialProjectRolesState);
    });
  });

  describe('createProjectRoleSuccessAction', () => {
    it('should set created projectRole in state', () => {
      const projectRole: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ProjectRolesState = {
        projectRoles: {
          old: { id: 'old', name: 'name' },
        },
        isInitProjectRoles: true,
      };
      const newState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'name' },
        },
        isInitProjectRoles: true,
      };

      const action = createProjectRoleSuccessAction({ projectRole });
      const state = projectRolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('getProjectRoleByIdSuccessAction', () => {
    it('should set updated projectRole in state', () => {
      const projectRole: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'old' },
        },
        isInitProjectRoles: true,
      };
      const newState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'newName' },
        },
        isInitProjectRoles: true,
      };

      const action = getProjectRoleByIdSuccessAction({ projectRole });
      const state = projectRolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new projectRole in state', () => {
      const projectRole: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ProjectRolesState = {
        projectRoles: {
          old: { id: 'old', name: 'old' },
        },
        isInitProjectRoles: true,
      };
      const newState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitProjectRoles: true,
      };

      const action = getProjectRoleByIdSuccessAction({ projectRole });
      const state = projectRolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('deleteProjectRoleSuccessAction', () => {
    it('should delete projectRole in state', () => {
      const projectRole: INameId = { id: 'old', name: 'old' };
      const oldState: ProjectRolesState = {
        projectRoles: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'name' },
        },
        isInitProjectRoles: true,
      };
      const newState: ProjectRolesState = {
        projectRoles: {
          id: { id: 'id', name: 'name' },
        },
        isInitProjectRoles: true,
      };

      const action = deleteProjectRoleSuccessAction({ id: projectRole.id });
      const state = projectRolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
