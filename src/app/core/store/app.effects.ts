import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { changeLocalStorageTema, setDark, setLight } from './main/main.actions';

@Injectable()
export class AppEffects {
  public setDarkTemaLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setDark),
      map(() => {
        localStorage.setItem('tema', 'dark');
        return changeLocalStorageTema();
      }),
    ),
  );
  public setLightTemaLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLight),
      map(() => {
        localStorage.setItem('tema', 'light');
        return changeLocalStorageTema();
      }),
    ),
  );
  constructor(private actions$: Actions) {}
}
