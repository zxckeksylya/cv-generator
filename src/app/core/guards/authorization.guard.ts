import { CanActivate, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RoutingConstants } from '../constants/routing.constants';
import { accessTokenSelector } from '../store/authorization/authorization.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private store: Store<AppState>, private route: Router) {}

  public canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(accessTokenSelector),
      take(1),
      map((token) => {
        if (token) {
          return true;
        }
        this.route.navigate([RoutingConstants.AUTHORIZATION]);
        return false;
      }),
    );
  }

  public canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
