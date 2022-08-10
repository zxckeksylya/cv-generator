import { INameId } from '../../interfaces/name-id.interface';
import {
  clearRolesAction,
  createRoleSuccessAction,
  deleteRoleSuccessAction,
  getRoleByIdSuccessAction,
  getRolesSuccessAction,
} from './roles.actions';
import { initialRolesState, rolesReducer, RolesState } from './roles.reducers';

fdescribe('rolesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = rolesReducer(initialRolesState, action);

      expect(state).toBe(initialRolesState);
    });
  });

  describe('clearRolesAction', () => {
    it('should clear state', () => {
      const action = clearRolesAction();
      const state = rolesReducer(initialRolesState, action);

      expect(state).toEqual(initialRolesState);
      expect(state).not.toBe(initialRolesState);
    });
  });

  describe('getRolesSuccessAction', () => {
    it('should set roles in state', () => {
      const roles: INameId[] = [{ id: 'id', name: 'name' }];
      const newState: RolesState = {
        roles: {
          id: { id: 'id', name: 'name' },
        },
        isInitRoles: true,
      };
      const action = getRolesSuccessAction({ roles });
      const state = rolesReducer(initialRolesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialRolesState);
    });
  });

  describe('createRoleSuccessAction', () => {
    it('should set created category in state', () => {
      const role: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: RolesState = {
        roles: {
          old: { id: 'old', name: 'name' },
        },
        isInitRoles: true,
      };
      const newState: RolesState = {
        roles: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'name' },
        },
        isInitRoles: true,
      };

      const action = createRoleSuccessAction({ role });
      const state = rolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getRoleByIdSuccessAction', () => {
    it('should set updated role in state', () => {
      const role: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: RolesState = {
        roles: {
          id: { id: 'id', name: 'old' },
        },
        isInitRoles: true,
      };
      const newState: RolesState = {
        roles: {
          id: { id: 'id', name: 'newName' },
        },
        isInitRoles: true,
      };

      const action = getRoleByIdSuccessAction({ role });
      const state = rolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new role in state', () => {
      const role: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: RolesState = {
        roles: {
          old: { id: 'old', name: 'old' },
        },
        isInitRoles: true,
      };
      const newState: RolesState = {
        roles: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitRoles: true,
      };

      const action = getRoleByIdSuccessAction({ role });
      const state = rolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('deleteRoleSuccessAction', () => {
    it('should delete role in state', () => {
      const role: INameId = { id: 'old', name: 'old' };
      const oldState: RolesState = {
        roles: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'name' },
        },
        isInitRoles: true,
      };
      const newState: RolesState = {
        roles: {
          id: { id: 'id', name: 'name' },
        },
        isInitRoles: true,
      };

      const action = deleteRoleSuccessAction({ id: role.id });
      const state = rolesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
