import { createAction, props } from '@ngrx/store';
import { Skill } from '../../interfaces/skill.interface';

export const initSkillsStoreAction = createAction('[SKILLS] init skills');

export const initSkillsStoreSuccessAction = createAction('[SKILLS] success init skills');

export const initSkillsStoreFailedAction = createAction('[SKILLS] failed init skills');

export const getSkillsAction = createAction('[SKILLS] get skills list');

export const getSkillsSuccessAction = createAction(
  '[SKILLS] success get skills list',
  props<{ skills: Skill[] }>(),
);

export const getSkillsFailedAction = createAction('[SKILLS] failed get skills list');

export const clearSkillsAction = createAction('[SKILLS] clear skills store');
