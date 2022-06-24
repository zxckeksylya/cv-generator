import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '../store/app.reducers';
import { authorizationSelector } from '../store/authorization/authorization.selectors';

const blackListForUrls = [`${environment.host}/auth/login`];

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private store: State<AppState>) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!blackListForUrls.includes(req.url)) {
      const token = this.store.pipe(select(authorizationSelector), take(1));
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }
    return next.handle(req);
  }
}
