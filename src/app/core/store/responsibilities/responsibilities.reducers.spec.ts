import { INameId } from '../../interfaces/name-id.interface';
import { deleteResponsibilitySuccessAction } from './responsibilities.actions';
import {
  clearResponsibilitiesAction,
  createResponsibilitySuccessAction,
  getResponsibilitiesSuccessAction,
  getResponsibilityByIdSuccessAction,
} from './responsibilities.actions';
import {
  initialResponsibilitiesState,
  responsibilitiesReducer,
  ResponsibilitiesState,
} from './responsibilities.reducers';

describe('responsibilitiesReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = responsibilitiesReducer(initialResponsibilitiesState, action);

      expect(state).toBe(initialResponsibilitiesState);
    });
  });

  describe('clearResponsibilitiesAction', () => {
    it('should clear state', () => {
      const action = clearResponsibilitiesAction();
      const state = responsibilitiesReducer(initialResponsibilitiesState, action);

      expect(state).toEqual(initialResponsibilitiesState);
    });
  });

  describe('getResponsibilitiesSuccessAction', () => {
    it('should set responsibilities in state', () => {
      const responsibilities: INameId[] = [{ id: 'id', name: 'name' }];
      const newState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'name' },
        },
        isInitResponsibilities: true,
      };

      const action = getResponsibilitiesSuccessAction({ responsibilities });
      const state = responsibilitiesReducer(initialResponsibilitiesState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialResponsibilitiesState);
    });
  });

  describe('createResponsibilitySuccessAction', () => {
    it('should set created responsibility in state', () => {
      const responsibility: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ResponsibilitiesState = {
        responsibilities: {
          old: { id: 'old', name: 'name' },
        },
        isInitResponsibilities: true,
      };
      const newState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'name' },
        },
        isInitResponsibilities: true,
      };

      const action = createResponsibilitySuccessAction({ responsibility });
      const state = responsibilitiesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getResponsibilityByIdSuccessAction', () => {
    it('should set updated responsibility in state', () => {
      const responsibility: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'old' },
        },
        isInitResponsibilities: true,
      };
      const newState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'newName' },
        },
        isInitResponsibilities: true,
      };
      const action = getResponsibilityByIdSuccessAction({ responsibility });
      const state = responsibilitiesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });

    it('should set new responsibility in state', () => {
      const responsibility: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: ResponsibilitiesState = {
        responsibilities: {
          old: { id: 'old', name: 'old' },
        },
        isInitResponsibilities: true,
      };
      const newState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitResponsibilities: true,
      };

      const action = getResponsibilityByIdSuccessAction({ responsibility });
      const state = responsibilitiesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('deleteResponsibilitySuccessAction', () => {
    it('should delete responsibility in state', () => {
      const responsibility: INameId = { id: 'old', name: 'old' };
      const oldState: ResponsibilitiesState = {
        responsibilities: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'name' },
        },
        isInitResponsibilities: true,
      };
      const newState: ResponsibilitiesState = {
        responsibilities: {
          id: { id: 'id', name: 'name' },
        },
        isInitResponsibilities: true,
      };

      const action = deleteResponsibilitySuccessAction({ id: responsibility.id });
      const state = responsibilitiesReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
