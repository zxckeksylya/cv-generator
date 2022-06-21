import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import {
  initTokenAction,
  initTokenSuccessAction,
  changeTokenAction,
  loginAction,
} from './autorization.actions';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable()
export class AuthorizationEffects {
  public $initToken = createEffect(() =>
    this.$actions.pipe(
      ofType(initTokenAction),
      map(() => {
        const accessToken = localStorage.getItem('token') || '';
        return initTokenSuccessAction({ accessToken });
      }),
    ),
  );

  public $changeToken = createEffect(() =>
    this.$actions.pipe(
      ofType(changeTokenAction),
      map((parameter) => {
        const { accessToken } = parameter;
        localStorage.setItem('token', accessToken);
        return initTokenSuccessAction({ accessToken });
      }),
    ),
  );

  public $loginUser = createEffect(() =>
    this.$actions.pipe(
      ofType(loginAction),
      map((parameter) => {
        const { email, password } = parameter;
        let accessToken = '';
        this.authorizationService.login(email, password).subscribe(
          (value) => (accessToken = value.accessToken),
          (error) => console.log(error),
        );
        return changeTokenAction({ accessToken });
      }),
    ),
  );

  constructor(private $actions: Actions, private authorizationService: AuthorizationService) {}
}
