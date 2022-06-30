import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import {
  createProjectAction,
  createProjectSuccessAction,
  deleteProjectAction,
  deleteProjectSuccessAction,
  getProjectByIdAction,
  getProjectByIdSuccessAction,
  getProjectsAction,
  getProjectsSuccessAction,
  updateProjectAction,
  updateProjectSuccessAction,
} from './projects.actions';

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
      map((project) => getProjectByIdSuccessAction(project)),
    ),
  );

  public createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProjectAction),
      switchMap((project) => this.projectsService.createProject(project)),
      switchMap((project) => this.projectsService.getProjectById(project.id)),
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
      switchMap((deleteProject) =>
        this.projectsService
          .deleteProject(deleteProject)
          .pipe(map(() => deleteProjectSuccessAction(deleteProject))),
      ),
    ),
  );

  constructor(private actions$: Actions, private projectsService: ProjectsService) {}
}
