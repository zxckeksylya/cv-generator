import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SKILLS_FEATURE_KEY } from './skills.reducers';
import { SkillsState } from './skills.reducers';

export const skillsFeatureSelector = createFeatureSelector<SkillsState>(SKILLS_FEATURE_KEY);

export const getSkillsSelector = createSelector(skillsFeatureSelector, (state) =>
  Object.values(state.skills),
);

export const getSkillsNamesSelector = createSelector(skillsFeatureSelector, (state) => [
  ...new Set(Object.values(state.skills).map((item) => item.name)),
]);

export const getSkillByNameSelector = createSelector(
  skillsFeatureSelector,
  (state: SkillsState, props: { name: string }) =>
    Object.values(state.skills).filter((item) => item.name === props.name),
);

export const getSkillByIdSelector = createSelector(
  skillsFeatureSelector,
  (state: SkillsState, props: { id: string }) => state.skills[props.id],
);

export const getFirstSkill = createSelector(
  skillsFeatureSelector,
  (state) => Object.values(state.skills)[0],
);

export const getSkillsByLevelId = createSelector(
  skillsFeatureSelector,
  (state: SkillsState, props: { id: string }) =>
    Object.values(state.skills).filter((item) => (item.level.id === props.id ? true : false)),
);

export const getSkillsByCategoryId = createSelector(
  skillsFeatureSelector,
  (state: SkillsState, props: { id: string }) =>
    Object.values(state.skills).filter((item) => (item.category.id === props.id ? true : false)),
);

export const getIsInitSkillsSelector = createSelector(
  skillsFeatureSelector,
  (state) => state.isInitSkills,
);
