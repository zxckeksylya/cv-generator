import { CanActivate, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { authorizationSelector } from '../store/authorization/authorization.selectors';
import { RoutingConstants } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private store: Store<AppState>, private route: Router) {}

  public canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(authorizationSelector),
      map((token) => {
        if (token) {
          return true;
        }
        this.route.navigate([RoutingConstants.AUTHORIZATION]);
        return false;
      }),
      take(1),
    );
  }

  public canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
