import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AuthorizationService } from '../../services/authorization.service';
import { UserService } from '../../services/user.service';
import {
  changeTokenAction,
  clearAuthorizationStateAction,
  clearAuthorizationStateSuccessAction,
  initTokenAction,
  initTokenSuccessAction,
  loginUserAction,
  loginUserFailedAction,
  loginUserSuccessAction,
  setAuthorizationUserAction,
  setAuthorizationUserSuccessAction,
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
      map((loginResponse) => loginUserSuccessAction(loginResponse)),
      catchError(() => of(loginUserFailedAction())),
    ),
  );

  public loginUserSuccessForToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserSuccessAction),
      map((accessToken) => changeTokenAction(accessToken)),
    ),
  );

  public loginUserSuccessForResponse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setAuthorizationUserAction),
      switchMap(() => this.authorizationService.getCurrentUser()),
      switchMap((currentUser) => this.userService.getUserById(currentUser.userId)),
      map((user) => setAuthorizationUserSuccessAction({ user: user[0] })),
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
    private userService: UserService,
    private route: Router,
  ) {}
}
