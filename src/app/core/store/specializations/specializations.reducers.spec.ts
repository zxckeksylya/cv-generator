import { INameId } from '../../interfaces/name-id.interface';
import {
  clearSpecializationsAction,
  createSpecializationSuccessAction,
  deleteSpecializationSuccessAction,
  getSpecializationByIdSuccessAction,
  getSpecializationsSuccessAction,
} from './specializations.actions';
import {
  initialSpecializationsState,
  specializationsReducer,
  SpecializationsState,
} from './specializations.reducers';

describe('specializationsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = specializationsReducer(initialSpecializationsState, action);

      expect(state).toBe(initialSpecializationsState);
    });
  });

  describe('clearSpecializationsAction', () => {
    it('should clear state', () => {
      const action = clearSpecializationsAction();
      const state = specializationsReducer(initialSpecializationsState, action);

      expect(state).toEqual(initialSpecializationsState);
      expect(state).not.toBe(initialSpecializationsState);
    });
  });

  describe('getSpecializationsSuccessAction', () => {
    it('should set specializations in state', () => {
      const specializations: INameId[] = [{ id: 'id', name: 'name' }];
      const newState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'name' },
        },
        isInitSpecializations: true,
      };
      const action = getSpecializationsSuccessAction({ specializations });
      const state = specializationsReducer(initialSpecializationsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialSpecializationsState);
    });
  });

  describe('createSpecializationSuccessAction', () => {
    it('should set created specialization in state', () => {
      const specialization: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: SpecializationsState = {
        specializations: {
          old: { id: 'old', name: 'name' },
        },
        isInitSpecializations: true,
      };
      const newState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'name' },
        },
        isInitSpecializations: true,
      };
      const action = createSpecializationSuccessAction({ specialization });
      const state = specializationsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getSpecializationByIdSuccessAction', () => {
    it('should set updated specialization in state', () => {
      const specialization: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'old' },
        },
        isInitSpecializations: true,
      };
      const newState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'newName' },
        },
        isInitSpecializations: true,
      };

      const action = getSpecializationByIdSuccessAction({ specialization });
      const state = specializationsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new category in state', () => {
      const specialization: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: SpecializationsState = {
        specializations: {
          old: { id: 'old', name: 'old' },
        },
        isInitSpecializations: true,
      };
      const newState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitSpecializations: true,
      };

      const action = getSpecializationByIdSuccessAction({ specialization });
      const state = specializationsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('deleteSpecializationSuccessAction', () => {
    it('should delete specialization in state', () => {
      const specialization: INameId = { id: 'old', name: 'old' };
      const oldState: SpecializationsState = {
        specializations: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'name' },
        },
        isInitSpecializations: true,
      };
      const newState: SpecializationsState = {
        specializations: {
          id: { id: 'id', name: 'name' },
        },
        isInitSpecializations: true,
      };

      const action = deleteSpecializationSuccessAction({ id: specialization.id });
      const state = specializationsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
