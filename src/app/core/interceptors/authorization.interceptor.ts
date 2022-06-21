import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { select, State } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { authorizationSelector } from '../store/autorization/autorization.selectors';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor, OnDestroy {
  private $destroy = new Subject<void>();

  constructor(private store: State<AppState>) {}

  public ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.pipe(select(authorizationSelector), takeUntil(this.$destroy)).subscribe((token) => {
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    });
    return next.handle(req);
  }
}
