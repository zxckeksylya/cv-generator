import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SKILLS_FEATURE_KEY } from './skills.reducers';
import { SkillsState } from './skills.reducers';

export const skillsFeatureSelector = createFeatureSelector<SkillsState>(SKILLS_FEATURE_KEY);

export const getSkillsSelector = createSelector(skillsFeatureSelector, (state) => state.skills);

export const getIsInitSkillsSelector = createSelector(
  skillsFeatureSelector,
  (state) => state.isInitSkills,
);
