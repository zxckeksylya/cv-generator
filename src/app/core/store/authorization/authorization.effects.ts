import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  initTokenAction,
  initTokenSuccessAction,
  changeTokenAction,
  loginUserAction,
  loginUserSuccessAction,
  loginUserFailedAction,
} from './authorization.actions';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import {
  clearAuthorizationStateAction,
  clearAuthorizationStateSuccessAction,
} from './authorization.actions';

@Injectable()
export class AuthorizationEffects {
  public initToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initTokenAction),
      map(() => {
        const accessToken = localStorage.getItem('token') || '';
        return initTokenSuccessAction({ accessToken });
      }),
    ),
  );

  public changeToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeTokenAction),
      map(({ accessToken }) => {
        localStorage.setItem('token', accessToken);
        this.route.navigate([RoutingConstants.MAIN]);
        return initTokenSuccessAction({ accessToken });
      }),
    ),
  );

  public loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserAction),
      switchMap((loginUser) => this.authorizationService.login(loginUser)),
      map(({ accessToken }) => loginUserSuccessAction({ accessToken })),
      catchError(() => of(loginUserFailedAction())),
    ),
  );

  public loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserSuccessAction),
      map((accessToken) => changeTokenAction(accessToken)),
    ),
  );

  public clearAuthorizationState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearAuthorizationStateAction),
      map(() => {
        localStorage.removeItem('token');
        return clearAuthorizationStateSuccessAction();
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private route: Router,
  ) {}
}