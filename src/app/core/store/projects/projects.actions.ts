import { createAction, props } from '@ngrx/store';
import {
  GetProject,
  UpdateProject,
  CreateProject,
  DeleteProject,
} from '../../interfaces/project.interface';

export const initProjectsStoreAction = createAction('[PROJECTS] init projects');

export const initProjectsStoreSuccessAction = createAction('[PROJECTS] success init projects');

export const initProjectsStoreFailedAction = createAction('[PROJECTS] failed init projects');

export const getProjectsAction = createAction('[PROJECTS] get projects list');

export const getProjectsSuccessAction = createAction(
  '[PROJECT] success get project list',
  props<{ projects: GetProject[] }>(),
);

export const getProjectByIdAction = createAction(
  '[PROJECTS] get project by id',
  props<{ id: string }>(),
);

export const getProjectByIdSuccessAction = createAction(
  '[PROJECTS] success get project by id',
  props<{ project: GetProject }>(),
);

export const createProjectAction = createAction(
  '[PROJECTS] create project',
  props<CreateProject>(),
);

export const createProjectSuccessAction = createAction(
  '[PROJECTS] success create project',
  props<{ project: GetProject }>(),
);

export const updateProjectAction = createAction(
  '[PROJECTS] update project',
  props<UpdateProject>(),
);

export const updateProjectSuccessAction = createAction(
  '[PROJECTS] success update project',
  props<{ id: string }>(),
);

export const deleteProjectAction = createAction(
  '[PROJECTS] delete Project',
  props<DeleteProject>(),
);

export const deleteProjectSuccessAction = createAction(
  '[PROJECTS] success delete project',
  props<{ id: string }>(),
);

export const clearProjectsStoreAction = createAction('[PROJECTS] clear projects store');
