import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { AppState } from '../app.reducers';
import {
  getProjectByIdAction,
  getProjectByIdSuccessAction,
  initProjectsStoreAction,
  initProjectsStoreFailedAction,
  initProjectsStoreSuccessAction,
} from './projects.actions';
import {
  deleteProjectAction,
  deleteProjectSuccessAction,
  updateProjectAction,
  updateProjectSuccessAction,
} from './projects.actions';
import {
  createProjectAction,
  createProjectSuccessAction,
  getProjectsAction,
  getProjectsSuccessAction,
} from './projects.actions';
import { getIsInitProjectsSelector } from './projects.selectors';

@Injectable()
export class ProjectsEffect {
  public getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsAction, deleteProjectSuccessAction),
      switchMap(() => this.projectsService.getProjects()),
      map((projects) => getProjectsSuccessAction({ projects })),
    ),
  );

  public getProjectById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectByIdAction, createProjectSuccessAction, updateProjectSuccessAction),
      switchMap((item) => this.projectsService.getProjectById(item.id)),
      map((project) => getProjectByIdSuccessAction(project)),
    ),
  );

  public createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProjectAction),
      switchMap((project) => this.projectsService.createProject(project)),
      map((project) => createProjectSuccessAction(project)),
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
      switchMap((deleteProject) => this.projectsService.deleteProject(deleteProject)),
      map(() => deleteProjectSuccessAction()),
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
            isInit ? initProjectsStoreSuccessAction() : initProjectsStoreFailedAction(),
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

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private store: Store<AppState>,
  ) {}
}
