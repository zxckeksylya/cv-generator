import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, concatMap, from, map, of, switchMap, take } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { LanguagesService } from '../../services/languages.service';
import { AppState } from '../app.reducers';
import {
  createEmployeeSuccessAction,
  updateEmployeeSuccessAction,
} from '../employess/employees.actions';
import { getEmployeeByIdSelector } from '../employess/employees.selectors';
import { getLevelByIdSuccessAction } from '../level/levels.actions';
import {
  baseCreateLanguageAction,
  baseCreateLanguageSuccessAction,
  createLanguageAction,
  createLanguageSuccessAction,
  deleteLanguageAction,
  deleteLanguageSuccessAction,
  getLanguageByIdAction,
  getLanguageByIdSuccessAction,
  getLanguagesAction,
  getLanguagesFailedAction,
  getLanguagesSuccessAction,
  initLanguagesStoreAction,
  initLanguagesStoreFailedAction,
  initLanguagesStoreSuccessAction,
  updateLanguageAction,
  updateLanguageSuccessAction,
} from './language.actions';
import { getIsInitLanguagesSelector, getLanguagesByLevelIdSelector } from './language.selectors';

@Injectable()
export class LanguagesEffect {
  public initLanguagesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLanguagesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitLanguagesSelector),
          take(1),
          map(isInit =>
            !isInit ? initLanguagesStoreSuccessAction() : initLanguagesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initLanguagesSuccessStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initLanguagesStoreSuccessAction),
      map(() => getLanguagesAction()),
    ),
  );

  public getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguagesAction),
      switchMap(() => this.languagesService.getLanguages()),
      map(languages => getLanguagesSuccessAction({ languages })),
      catchError(() => of(getLanguagesFailedAction())),
    ),
  );

  public baseCreateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(baseCreateLanguageAction, createLanguageAction),
      switchMap(language => this.languagesService.createLanguage(language)),
      switchMap(language => this.languagesService.getLanguageById(language.id)),
      map(language => baseCreateLanguageSuccessAction({ language })),
    ),
  );

  public createLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLanguageAction),
      concatMap(language => this.languagesService.createLanguage(language)),
      concatMap(language => this.languagesService.getLanguageById(language.id)),
      map(language => createLanguageSuccessAction({ language })),
    ),
  );

  public getLanguageById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguageByIdAction, updateLanguageSuccessAction),
      concatMap(item => this.languagesService.getLanguageById(item.id)),
      map(language => getLanguageByIdSuccessAction({ language })),
    ),
  );

  public updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLanguageAction),
      concatMap(language =>
        this.languagesService
          .updateLanguage(language.language)
          .pipe(map(lang => updateLanguageSuccessAction(lang))),
      ),
    ),
  );

  public deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLanguageAction),
      concatMap(language =>
        this.languagesService
          .deleteLanguage(language.id)
          .pipe(map(() => deleteLanguageSuccessAction(language))),
      ),
    ),
  );

  public changeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLevelByIdSuccessAction),
      concatMap(level =>
        this.store.pipe(
          select(state => getLanguagesByLevelIdSelector(state, { id: level.level.id })),
          take(1),
          concatMap(languages => from(languages)),
          map(language => getLanguageByIdAction({ id: language.id })),
        ),
      ),
    ),
  );

  public createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeSuccessAction),
      concatMap(employee => from(employee.employee.languages)),
      map(language => getLanguageByIdAction({ id: language.id })),
    ),
  );

  public updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployeeSuccessAction),
      concatMap(item =>
        this.store.pipe(
          select(state => getEmployeeByIdSelector(state, { id: item.id })),
          take(1),
          concatMap(employee => from(employee.languages)),
          map(language => getLanguageByIdAction({ id: language.id })),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService,
    private employeeService: EmployeeService,
    private store: Store<AppState>,
  ) {}
}
