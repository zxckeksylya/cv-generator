import { Skill } from '../../interfaces/skill.interface';
import {
  clearSkillsAction,
  createSkillSuccessAction,
  deleteSkillSuccessAction,
  getSkillByIdSuccessAction,
  getSkillsSuccessAction,
} from './skills.actions';
import { initialSkillsState, skillsReducer, SkillsState } from './skills.reducers';
describe('skillsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = skillsReducer(initialSkillsState, action);

      expect(state).toBe(initialSkillsState);
    });
  });

  describe('clearCategories action', () => {
    it('should clear state', () => {
      const action = clearSkillsAction;
      const state = skillsReducer(initialSkillsState, action);

      expect(state).toEqual(initialSkillsState);
    });
  });

  describe('getSkillsSuccessAction', () => {
    it('should set skills in state', () => {
      const skills: Skill[] = [
        {
          id: 'id',
          name: 'name',
          experience: 0,
          lastUsed: 0,
          category: { id: 'id', name: 'name' },
          level: { id: 'id', name: 'name' },
        },
      ];
      const newState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const action = getSkillsSuccessAction({ skills });
      const state = skillsReducer(initialSkillsState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialSkillsState);
    });
  });

  describe('createSkillSuccessAction', () => {
    it('should set created skill in state', () => {
      const skill: Skill = {
        id: 'id',
        name: 'name',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      };
      const oldState: SkillsState = {
        skills: {
          old: {
            id: 'old',
            name: 'old',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const newState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
          old: {
            id: 'old',
            name: 'old',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const action = createSkillSuccessAction({ skill });
      const state = skillsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('getSkillByIdSuccessAction', () => {
    it('should set updated skill in state', () => {
      const skill: Skill = {
        id: 'id',
        name: 'name',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      };
      const oldState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const newState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const action = getSkillByIdSuccessAction({ skill });
      const state = skillsReducer(oldState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
    it('should set new skill in state', () => {
      const skill: Skill = {
        id: 'id',
        name: 'name',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      };
      const oldState: SkillsState = {
        skills: {
          old: {
            id: 'old',
            name: 'old',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const newState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
          old: {
            id: 'old',
            name: 'old',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };

      const action = getSkillByIdSuccessAction({ skill });
      const state = skillsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });

  describe('deleteSkillSuccessAction', () => {
    it('should delete skill in state', () => {
      const skill: Skill = {
        id: 'old',
        name: 'old',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      };
      const oldState: SkillsState = {
        skills: {
          old: {
            id: 'old',
            name: 'old',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };
      const newState: SkillsState = {
        skills: {
          id: {
            id: 'id',
            name: 'name',
            experience: 0,
            lastUsed: 0,
            category: { id: 'id', name: 'name' },
            level: { id: 'id', name: 'name' },
          },
        },
        isInitSkills: true,
      };

      const action = deleteSkillSuccessAction({ id: skill.id });
      const state = skillsReducer(oldState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(oldState);
    });
  });
});
