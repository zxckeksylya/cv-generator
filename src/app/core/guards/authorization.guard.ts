import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RoutingConstants } from '../constants/routing.constants';
import { authorizationSelector } from '../store/autorization/autorization.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  private token: string;

  constructor(private store: Store<AppState>, private route: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.pipe(select(authorizationSelector)).subscribe((token) => (this.token = token));
    if (this.token) {
      return of(true);
    }
    this.route.navigate([RoutingConstants.AUTHORIZATION]);
    return of(false);
  }

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}
