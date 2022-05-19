import { Inject, Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { tap } from 'rxjs';
import { initThemeAction, setDarkThemeAction, setLightThemeAction } from './theme.actions';
import { Themes } from '../../enums/themes';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ThemeEffects {
  public setDarkThemeLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setDarkThemeAction),
        tap(() => {
          if (!this.documentRef.body.classList.contains(Themes.DARK)) {
            localStorage.setItem('theme', Themes.DARK);
            this.documentRef.body.classList.add(Themes.DARK);
            this.documentRef.body.classList.remove(Themes.LIGHT);
          }
        }),
      ),
    { dispatch: false },
  );

  public setLightThemeLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setLightThemeAction),
        tap(() => {
          if (!this.documentRef.body.classList.contains(Themes.LIGHT)) {
            localStorage.setItem('theme', Themes.LIGHT);
            this.documentRef.body.classList.add(Themes.LIGHT);
            this.documentRef.body.classList.remove(Themes.DARK);
          }
        }),
      ),
    { dispatch: false },
  );

  public initThemeinLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(initThemeAction),
        tap(() => {
          this.documentRef.body.classList.toggle(localStorage.getItem('theme') || Themes.LIGHT);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    @Inject(DOCUMENT) private readonly documentRef: Document,
  ) {}
}
