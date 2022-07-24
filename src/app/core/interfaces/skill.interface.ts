import { INameId } from './name-id.interface';

export interface Skill {
  id: string;
  name: string;
  category: INameId;
  experience: number;
  lastUsed: number;
  level: INameId;
}

export interface SkillMap {
  [id: string]: Skill;
}

export interface CreateSkill {
  name: string;
  category: string;
  experience: number;
  lastUsed: number;
  level: string;
}

export interface CreateSkillResponse extends CreateSkill {
  id: string;
}

export interface UpdateSkill {
  id: string;
  name: string;
  category: string;
  experience: number;
  lastUsed: number;
  level: string;
}
