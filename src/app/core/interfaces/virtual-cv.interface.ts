export interface VirtualCV {
  user: string;
  id: string;
  data: VirtualCVData;
}

export interface VirtualCVMap {
  [id: string]: VirtualCV;
}

export interface VirtualCVData {
  education: VirtualCVEducation;
  foreignLanguage: VirtualCvForeignLanguage[];
  general: VirtualCVGeneral;
  projects: VirtualCVProject[];
  resume: VirtualCVResume;
  skills: VirtualCVSkill[];
}

export interface VirtualCVEducation {
  establishment: string;
  profession: string;
}

export interface VirtualCvForeignLanguage {
  name: string;
  everydayReadingLevel: string;
  everydayWritingLevel: string;
  everydaySpeakingLevel: string;
  professionalReadingLevel: string;
  professionalWritingLevel: string;
  professionalSpeakingLevel: string;
}

export interface VirtualCVGeneral {
  firstName: string;
  lastName: string;
  name: string;
}

export interface VirtualCVProject {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  teamSize: string;
  tasksPerformed: string;
  projectRoles: VirtualCVName[];
  responsibilities: VirtualCVName[];
  specializations: string[];
}

export interface VirtualCVName {
  name: string;
}

export interface VirtualCVResume {
  content: string;
}

export interface VirtualCVSkill {
  skillType: string;
  skillsOfType: VirtualCVSkillsOfType[];
}

export interface VirtualCVSkillsOfType {
  skillName: string;
  experienceYears: number;
  level: string;
  lastUsedYear: number;
}

export interface CreateVirtualCV {
  cvId: string;
  userId: string;
}
