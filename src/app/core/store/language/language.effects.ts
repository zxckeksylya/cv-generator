import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, concatMap, from, map, switchMap, take } from 'rxjs';
import { LanguagesService } from '../../services/languages.service';
import { AppState } from '../app.reducers';
import { getLevelByIdSuccessAction } from '../level/levels.actions';
import {
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
          map((isInit) =>
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
      map((languages) => getLanguagesSuccessAction({ languages })),
      catchError(map(() => getLanguagesFailedAction())),
    ),
  );

  public createLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLanguageAction),
      switchMap((language) => this.languagesService.createLanguage(language)),
      switchMap((language) => this.languagesService.getLanguageById(language.id)),
      map((language) => createLanguageSuccessAction({ language })),
    ),
  );

  public getLanguageById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguageByIdAction, updateLanguageSuccessAction),
      concatMap((item) => this.languagesService.getLanguageById(item.id)),
      map((language) => getLanguageByIdSuccessAction({ language })),
    ),
  );

  public updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLanguageAction),
      concatMap((language) =>
        this.languagesService
          .updateLanguage(language.language)
          .pipe(map((lang) => updateLanguageSuccessAction(lang))),
      ),
    ),
  );

  public deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLanguageAction),
      concatMap((language) =>
        this.languagesService
          .deleteLanguage(language.id)
          .pipe(map(() => deleteLanguageSuccessAction(language))),
      ),
    ),
  );

  public changeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLevelByIdSuccessAction),
      concatMap((level) =>
        this.store.pipe(
          select((state) => getLanguagesByLevelIdSelector(state, { id: level.level.id })),
          take(1),
          concatMap((languages) => from(languages)),
          map((language) => getLanguageByIdAction({ id: language.id })),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService,
    private store: Store<AppState>,
  ) {}
}
