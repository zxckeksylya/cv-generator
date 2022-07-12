import { INameId } from '../../interfaces/name-id.interface';
import { createReducer, on } from '@ngrx/store';
import { clearSkillsAction, getSkillsSuccessAction } from './skills.actions';

export const SKILLS_FEATURE_KEY = 'skills';

export interface SkillsState {
  skills: INameId[];
  isInitSkills: boolean;
}

export const initialSkillsState: SkillsState = {
  skills: [],
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
    skills: action.skills,
  })),
);
