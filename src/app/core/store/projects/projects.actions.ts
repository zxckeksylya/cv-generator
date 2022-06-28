import { createAction, props } from '@ngrx/store';
import { CreateProjectResponse } from '../../interfaces/project/create-project-response.interface';
import { CreateProject } from '../../interfaces/project/create-project.interface';
import { GetProject } from '../../interfaces/project/get-project.interface';
import { UpdateProject } from '../../interfaces/project/update-project.interface';

export const getProjectsAction = createAction('[PROJECTS] get projects list');
export const getProjectsSuccessAction = createAction(
  '[PROJECT] success get project list',
  props<{ projects: GetProject[] }>(),
);

export const getProjectById = createAction('[PROJECTS] ');

export const createProjectAction = createAction(
  '[PROJECTS] create project',
  props<CreateProject>(),
);

export const createProjectSuccessAction = createAction(
  '[PROJECTS] success create project',
  props<{ project: CreateProjectResponse }>(),
);

export const updateProjectAction = createAction(
  '[PROJECTS] update project',
  props<UpdateProject>(),
);

export const updateProjectSuccessAction = createAction(
  '[PROJECTS] success update project',
  props<UpdateProject>(),
);

export const deleteProjectAction = createAction(
  '[PROJECTS] delete Project',
  props<{ id: string }>(),
);

export const deleteProjectSuccessAction = createAction('[PROJECTS] success delete project');
