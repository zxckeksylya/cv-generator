import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Themes } from '../../enums/themes';
import { changeThemeAction, initThemeAction, initThemeSuccessAction } from './theme.actions';

@Injectable()
export class ThemeEffects {
  public changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeThemeAction),
        map((parameter) => {
          const { theme } = parameter;
          this.documentRef.body.dataset['paletteTheme'] = theme;
          localStorage.setItem('theme', theme);
          return initThemeSuccessAction({ theme });
        }),
      ),
    { dispatch: false },
  );

  public initTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(initThemeAction),
        map(() => {
          const theme = localStorage.getItem('theme') || Themes.LIGHT;
          this.documentRef.body.dataset['paletteTheme'] = theme;
          return initThemeSuccessAction({ theme });
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    @Inject(DOCUMENT) private readonly documentRef: Document,
    private store: Store,
  ) {}
}