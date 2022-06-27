import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take, switchMap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoutingConstants } from '../constants/routing.constants';
import { AppState } from '../store/app.reducers';
import { accessTokenSelector } from '../store/authorization/authorization.selectors';
import { clearAppStateAction } from '../store/core/core.actions';

const blackListForUrls = [`${environment.host}/auth/login`];

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>, private route: Router) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!blackListForUrls.includes(req.url)) {
      return this.store.pipe(
        select(accessTokenSelector),
        take(1),
        switchMap((token) => {
          if (token) {
            req = this.addAccessTokenForRequestHeader(req, token);
          }
          return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.error.statusCode === 401) {
                this.store.dispatch(clearAppStateAction());
                this.route.navigate([RoutingConstants.AUTHORIZATION, RoutingConstants.LOGIN]);
                return throwError(error);
              }
              return throwError(error);
            }),
          );
        }),
      );
    }
    return next.handle(req);
  }

  private addAccessTokenForRequestHeader(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
