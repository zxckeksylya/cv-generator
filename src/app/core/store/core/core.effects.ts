import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { tap } from 'rxjs';
import { clearAppStateAction } from './core.actions';
import { clearAuthorizationStateAction } from '../authorization/authorization.actions';
import { clearBreadcrumbsStateAction } from '../breadcrumb/breadcrumb.actions';
import { clearPageHeadingStateAction } from '../page-heading/page-heading.actions';
import { clearSpecializationsAction } from '../specializations/specializations.actions';
import { clearResponsibilitiesAction } from '../responsibilities/responsibilities.actions';

@Injectable()
export class CoreEffects {
  public clearAppState$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(clearAppStateAction),
        tap(() => {
          this.store.dispatch(clearAuthorizationStateAction());
          this.store.dispatch(clearBreadcrumbsStateAction());
          this.store.dispatch(clearPageHeadingStateAction());
          this.store.dispatch(clearSpecializationsAction());
          this.store.dispatch(clearResponsibilitiesAction());
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
