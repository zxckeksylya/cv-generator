import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Injectable()
export class CoreEffects {
  public clearAppState$ = createEffect(() => this.actions$.pipe(), { dispatch: false });

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
