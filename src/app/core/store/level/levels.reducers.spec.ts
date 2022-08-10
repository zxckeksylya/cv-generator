import { levelsReducer, initialLevelsState, LevelsState } from './levels.reducers';
import {
  clearLevelsAction,
  getLevelsSuccessAction,
  createLevelSuccessAction,
} from './levels.actions';
import { INameId } from '../../interfaces/name-id.interface';
import { getLevelByIdSuccessAction, deleteLevelSuccessAction } from './levels.actions';
fdescribe('levelsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = levelsReducer(initialLevelsState, action);

      expect(state).toBe(initialLevelsState);
    });
  });
  describe('clearLevelsAction', () => {
    it('should clear state', () => {
      const action = clearLevelsAction();
      const state = levelsReducer(initialLevelsState, action);
      expect(state).toEqual(initialLevelsState);
    });
  });
  describe('getLevelsSuccessAction', () => {
    it('should set levels to state', () => {
      const levels: INameId[] = [
        {
          id: 'id',
          name: 'name',
        },
      ];
      const newState: LevelsState = {
        levels: {
          id: { id: 'id', name: 'name' },
        },
        isInitLevels: true,
      };

      const action = getLevelsSuccessAction({ levels });
      const state = levelsReducer(initialLevelsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialLevelsState);
    });
  });
  describe('createLevelSuccessAction', () => {
    it('should set created level in state', () => {
      const level: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: LevelsState = {
        levels: {
          old: { id: 'old', name: 'old' },
        },
        isInitLevels: true,
      };
      const newState: LevelsState = {
        levels: {
          id: { id: 'id', name: 'newName' },
          old: { id: 'old', name: 'old' },
        },
        isInitLevels: true,
      };
      const action = createLevelSuccessAction({ level });
      const state = levelsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('getLevelByIdSuccessAction', () => {
    it('should set updated category in state', () => {
      const level: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: LevelsState = {
        levels: {
          id: { id: 'id', name: 'old' },
        },
        isInitLevels: true,
      };
      const newState: LevelsState = {
        levels: {
          id: { id: 'id', name: 'newName' },
        },
        isInitLevels: true,
      };

      const action = getLevelByIdSuccessAction({ level });
      const state = levelsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new level in state', () => {
      const level: INameId = {
        id: 'id',
        name: 'newName',
      };
      const oldState: LevelsState = {
        levels: {
          old: { id: 'old', name: 'old' },
        },
        isInitLevels: true,
      };
      const newState: LevelsState = {
        levels: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'newName' },
        },
        isInitLevels: true,
      };

      const action = getLevelByIdSuccessAction({ level });
      const state = levelsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
  describe('deleteLevelSuccessAction', () => {
    it('should delete category in state', () => {
      const level: INameId = {
        id: 'old',
        name: 'old',
      };
      const oldState: LevelsState = {
        levels: {
          old: { id: 'old', name: 'old' },
          id: { id: 'id', name: 'newName' },
        },
        isInitLevels: true,
      };
      const newState: LevelsState = {
        levels: {
          id: { id: 'id', name: 'newName' },
        },
        isInitLevels: true,
      };

      const action = deleteLevelSuccessAction({ id: level.id });
      const state = levelsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
