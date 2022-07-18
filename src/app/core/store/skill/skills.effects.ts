import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, concatMap, from, map, switchMap, take } from 'rxjs';
import { SkillsService } from '../../services/skills.service';
import { AppState } from '../app.reducers';
import { getCategoryByIdSuccessAction } from '../category/categories.actions';
import { getLevelByIdSuccessAction } from '../level/levels.actions';
import {
  createSkillAction,
  deleteSkillAction,
  deleteSkillSuccessAction,
  getSkillByIdAction,
  getSkillByIdSuccessAction,
  getSkillsAction,
  getSkillsFailedAction,
  getSkillsSuccessAction,
  initSkillsStoreAction,
  initSkillsStoreFailedAction,
  initSkillsStoreSuccessAction,
  updateSkillAction,
  updateSkillSuccessAction,
} from './skills.actions';
import {
  getIsInitSkillsSelector,
  getSkillsByLevelId,
  getSkillsByCategoryId,
} from './skills.selectors';

@Injectable()
export class SkillsEffect {
  public initSkillsStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initSkillsStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitSkillsSelector),
          take(1),
          map((isInit) =>
            !isInit ? initSkillsStoreSuccessAction() : initSkillsStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initSkillsSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initSkillsStoreSuccessAction),
      map(() => getSkillsAction()),
    ),
  );

  public getSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSkillsAction),
      switchMap(() => this.skillsService.getSkills()),
      map((skills) => getSkillsSuccessAction({ skills })),
      catchError(map(() => getSkillsFailedAction())),
    ),
  );

  public createSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSkillAction),
      switchMap((skill) => this.skillsService.createSkill(skill)),
      switchMap((skill) => this.skillsService.getSkillById(skill.id)),
      map((skill) => getSkillByIdSuccessAction({ skill })),
    ),
  );

  public getSkillById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSkillByIdAction, updateSkillSuccessAction),
      concatMap((item) => this.skillsService.getSkillById(item.id)),
      map((skill) => getSkillByIdSuccessAction({ skill })),
    ),
  );

  public updateSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSkillAction),
      concatMap((skill) =>
        this.skillsService
          .updateSkill(skill.skill)
          .pipe(map((item) => updateSkillSuccessAction(item))),
      ),
    ),
  );

  public deleteSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSkillAction),
      concatMap((skill) =>
        this.skillsService.deleteSkill(skill.id).pipe(map(() => deleteSkillSuccessAction(skill))),
      ),
    ),
  );

  public changeLevelEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLevelByIdSuccessAction),
      concatMap((level) =>
        this.store.pipe(
          select((state) => getSkillsByLevelId(state, { id: level.level.id })),
          take(1),
          concatMap((skills) => from(skills)),
          map((skill) => getSkillByIdAction({ id: skill.id })),
        ),
      ),
    ),
  );

  public changeCategoryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoryByIdSuccessAction),
      concatMap((category) =>
        this.store.pipe(
          select((state) => getSkillsByCategoryId(state, { id: category.category.id })),
          take(1),
          concatMap((skills) => from(skills)),
          map((skill) => getSkillByIdAction({ id: skill.id })),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService,
    private store: Store<AppState>,
  ) {}
}
