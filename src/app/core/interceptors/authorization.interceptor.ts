import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { authorizationSelector } from '../store/authorization/authorization.selectors';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private store: State<AppState>) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.store.pipe(select(authorizationSelector))) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.store.pipe(select(authorizationSelector))}`,
        },
      });
    }
    return next.handle(req);
  }
}
