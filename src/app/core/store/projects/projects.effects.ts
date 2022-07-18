import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { concatMap, from, map, switchMap, take } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { AppState } from '../app.reducers';
import { getProjectRoleByIdSuccessAction } from '../projects-roles/project-roles.actions';
import { getResponsibilityByIdSuccessAction } from '../responsibilities/responsibilities.actions';
import { getSpecializationByIdSuccessAction } from '../specializations/specializations.actions';
import {
  createProjectAction,
  createProjectSuccessAction,
  deleteProjectAction,
  deleteProjectSuccessAction,
  getProjectByIdAction,
  getProjectByIdSuccessAction,
  getProjectsAction,
  getProjectsSuccessAction,
  initProjectsStoreAction,
  initProjectsStoreFailedAction,
  initProjectsStoreSuccessAction,
  updateProjectAction,
  updateProjectSuccessAction,
} from './projects.actions';
import {
  getIsInitProjectsSelector,
  getProjectsByProjectRoleIdSelector,
  getProjectsByResponsibilityIdSelector,
  getProjectsBySpecializationIdSelector,
} from './projects.selectors';

@Injectable()
export class ProjectsEffect {
  public getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction),
      switchMap(() => this.projectsService.getProjects()),
      map((projects) => getProjectsSuccessAction({ projects })),
    ),
  );

  public getProjectById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectByIdAction, updateProjectSuccessAction),
      switchMap((item) => this.projectsService.getProjectById(item.id)),
      map((project) => getProjectByIdSuccessAction({ project })),
    ),
  );

  public createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProjectAction),
      switchMap((project) => this.projectsService.createProject(project)),
      switchMap((project) => this.projectsService.getProjectById(project.id)),
      map((project) => createProjectSuccessAction({ project })),
    ),
  );

  public updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProjectAction),
      switchMap((project) => this.projectsService.updateProject(project)),
      map((project) => updateProjectSuccessAction(project)),
    ),
  );

  public deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProjectAction),
      switchMap((deleteProject) =>
        this.projectsService
          .deleteProject(deleteProject)
          .pipe(map(() => deleteProjectSuccessAction(deleteProject))),
      ),
    ),
  );

  public initProjectsStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProjectsStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitProjectsSelector),
          take(1),
          map((isInit) =>
            !isInit ? initProjectsStoreSuccessAction() : initProjectsStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initProjectsStoreSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initProjectsStoreSuccessAction),
      map(() => getProjectsAction()),
    ),
  );

  public changeResponsibility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getResponsibilityByIdSuccessAction),
      concatMap((responsibility) =>
        this.store.pipe(
          select((state) =>
            getProjectsByResponsibilityIdSelector(state, { id: responsibility.responsibility.id }),
          ),
          take(1),
          concatMap((projects) => from(projects)),
          map((project) => getProjectByIdAction({ id: project.id })),
        ),
      ),
    ),
  );

  public changeSpecialization$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecializationByIdSuccessAction),
      concatMap((specialization) =>
        this.store.pipe(
          select((state) =>
            getProjectsBySpecializationIdSelector(state, { id: specialization.specialization.id }),
          ),
          take(1),
          concatMap((projects) => from(projects)),
          map((project) => getProjectByIdAction({ id: project.id })),
        ),
      ),
    ),
  );

  public changeProjectRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectRoleByIdSuccessAction),
      concatMap((projectRole) =>
        this.store.pipe(
          select((state) =>
            getProjectsByProjectRoleIdSelector(state, { id: projectRole.projectRole.id }),
          ),
          take(1),
          concatMap((projects) => from(projects)),
          map((project) => getProjectByIdAction({ id: project.id })),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
  ) {}
}
