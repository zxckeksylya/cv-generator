import { createAction, props } from '@ngrx/store';
import { CreateSkill, Skill, UpdateSkill } from '../../interfaces/skill.interface';

export const initSkillsStoreAction = createAction('[SKILLS] init skills');

export const initSkillsStoreSuccessAction = createAction('[SKILLS] success init skills');

export const initSkillsStoreFailedAction = createAction('[SKILLS] failed init skills');

export const getSkillsAction = createAction('[SKILLS] get skills list');

export const getSkillsSuccessAction = createAction(
  '[SKILLS] success get skills list',
  props<{ skills: Skill[] }>(),
);

export const getSkillsFailedAction = createAction('[SKILLS] failed get skills list');

export const getSkillByIdAction = createAction('[SKILLS] get skill by id', props<{ id: string }>());

export const getSkillByIdSuccessAction = createAction(
  '[SKILLS] success get skill by id',
  props<{ skill: Skill }>(),
);

export const createSkillAction = createAction('[SKILLS] create skill', props<CreateSkill>());

export const createSkillSuccessAction = createAction(
  '[SKILLS] success create skill',
  props<{ skill: Skill }>(),
);

export const updateSkillAction = createAction(
  '[SKILLS] update skill',
  props<{ skill: UpdateSkill }>(),
);

export const updateSkillSuccessAction = createAction(
  '[SKILL] success update skill',
  props<{ id: string }>(),
);

export const deleteSkillAction = createAction('[SKILL] delete skill', props<{ id: string }>());

export const deleteSkillSuccessAction = createAction(
  '[SKILLS] success delete skill',
  props<{ id: string }>(),
);

export const changeNotSkillAction = createAction('[SKILLS] change not skill');

export const clearSkillsAction = createAction('[SKILLS] clear skills store');
