import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take, catchError, of } from 'rxjs';
import { SkillsService } from '../../services/skills.service';
import { AppState } from '../app.reducers';
import {
  getSkillsAction,
  getSkillsFailedAction,
  getSkillsSuccessAction,
  initSkillsStoreAction,
  initSkillsStoreFailedAction,
  initSkillsStoreSuccessAction,
} from './skills.actions';
import { getIsInitSkillsSelector } from './skills.selectors';

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
      catchError(() => of(getSkillsFailedAction())),
    ),
  );

  constructor(
    private actions$: Actions,
    private skillsService: SkillsService,
    private store: Store<AppState>,
  ) {}
}
