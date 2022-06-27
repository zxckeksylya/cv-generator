import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable, take, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducers';
import { accessTokenSelector } from '../store/authorization/authorization.selectors';

const blackListForUrls = [`${environment.host}/auth/login`];

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  private token = '';
  constructor(private store: State<AppState>) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!blackListForUrls.includes(req.url)) {
      return this.store.pipe(
        select(accessTokenSelector),
        take(1),
        switchMap((token) => {
          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            });
          }
          return next.handle(req);
        }),
      );
    }
    return next.handle(req);
  }
}
