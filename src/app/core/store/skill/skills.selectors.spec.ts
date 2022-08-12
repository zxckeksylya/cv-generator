import { Skill } from '../../interfaces/skill.interface';
import { SkillsState } from './skills.reducers';
import {
  getFirstSkill,
  getIsInitSkillsSelector,
  getSkillByIdSelector,
  getSkillByNameSelector,
  getSkillsByCategoryId,
  getSkillsByLevelId,
  getSkillsNamesSelector,
  getSkillsSelector,
} from './skills.selectors';

describe('skillsSelectors', () => {
  const state: SkillsState = {
    skills: {
      id0: {
        id: 'id0',
        name: 'string',
        experience: 0,
        lastUsed: 0,
        level: {
          id: 'id',
          name: 'string',
        },
        category: {
          id: 'id',
          name: 'name',
        },
      },
      id1: {
        id: 'id1',
        name: 'string',
        experience: 0,
        lastUsed: 0,
        level: {
          id: 'id1',
          name: 'string',
        },
        category: {
          id: 'id1',
          name: 'name',
        },
      },
    },
    isInitSkills: true,
  };

  const skills: Skill[] = [
    {
      id: 'id0',
      name: 'string',
      experience: 0,
      lastUsed: 0,
      level: {
        id: 'id',
        name: 'string',
      },
      category: {
        id: 'id',
        name: 'name',
      },
    },
    {
      id: 'id1',
      name: 'string',
      experience: 0,
      lastUsed: 0,
      level: {
        id: 'id1',
        name: 'string',
      },
      category: {
        id: 'id1',
        name: 'name',
      },
    },
  ];

  const skill: Skill = {
    id: 'id0',
    name: 'string',
    experience: 0,
    lastUsed: 0,
    level: {
      id: 'id',
      name: 'string',
    },
    category: {
      id: 'id',
      name: 'name',
    },
  };

  it('should return skills list', () => {
    const result = getSkillsSelector.projector(state);
    expect(result).toEqual(skills);
  });

  it('should return names of skills', () => {
    const names: string[] = ['string'];
    const result = getSkillsNamesSelector.projector(state);

    expect(result).toEqual(names);
  });

  it('should return skill by id', () => {
    const id = 'id0';

    const result = getSkillByIdSelector.projector(state, { id });

    expect(result).toEqual(skill);
  });

  it('should return skill by name', () => {
    const name = 'string';

    const result = getSkillByNameSelector.projector(state, { name });

    expect(result).toEqual(skills);
  });

  it('should return first skill', () => {
    const result = getFirstSkill.projector(state);

    expect(result).toEqual(skill);
  });

  it('should return is init', () => {
    const result = getIsInitSkillsSelector.projector(state);

    expect(result).toEqual(state.isInitSkills);
  });

  it('should return skills by level id', () => {
    const id = 'id';
    const skillsByLevelId: Skill[] = [
      {
        id: 'id0',
        name: 'string',
        experience: 0,
        lastUsed: 0,
        level: {
          id: 'id',
          name: 'string',
        },
        category: {
          id: 'id',
          name: 'name',
        },
      },
    ];
    const result = getSkillsByLevelId.projector(state, { id });

    expect(result).toEqual(skillsByLevelId);
  });

  it('should return skills by level id', () => {
    const id = 'id';
    const skillsByCategoryId: Skill[] = [
      {
        id: 'id0',
        name: 'string',
        experience: 0,
        lastUsed: 0,
        level: {
          id: 'id',
          name: 'string',
        },
        category: {
          id: 'id',
          name: 'name',
        },
      },
    ];
    const result = getSkillsByCategoryId.projector(state, { id });

    expect(result).toEqual(skillsByCategoryId);
  });
});
