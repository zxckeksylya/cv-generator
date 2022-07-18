import { createReducer, on } from '@ngrx/store';
import { Skill, SkillMap } from '../../interfaces/skill.interface';
import { arrayToMap } from '../../utils/array-to-map.util';
import { getSkillByIdSuccessAction, deleteSkillSuccessAction } from './skills.actions';
import { deleteInMap } from '../../utils/delete-in-map.util';
import {
  clearSkillsAction,
  getSkillsSuccessAction,
  createSkillSuccessAction,
} from './skills.actions';

export const SKILLS_FEATURE_KEY = 'skills';

export interface SkillsState {
  skills: SkillMap;
  isInitSkills: boolean;
}

export const initialSkillsState: SkillsState = {
  skills: {},
  isInitSkills: false,
};

export const skillsReducer = createReducer(
  initialSkillsState,
  on(clearSkillsAction, () => ({
    ...initialSkillsState,
  })),
  on(getSkillsSuccessAction, (state, action) => ({
    ...state,
    isInitSkills: true,
    skills: arrayToMap<Skill>(action.skills),
  })),
  on(createSkillSuccessAction, (state, action) => ({
    ...state,
    skills: {
      [action.skill.id]: action.skill,
      ...state.skills,
    },
  })),
  on(getSkillByIdSuccessAction, (state, action) => ({
    ...state,
    skills: {
      ...state.skills,
      [action.skill.id]: action.skill,
    },
  })),
  on(deleteSkillSuccessAction, (state, action) => ({
    ...state,
    skills: deleteInMap<SkillMap>(state.skills, action.id),
  })),
);
