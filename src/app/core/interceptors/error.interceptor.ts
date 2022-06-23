import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorNotification } from '../interfaces/error-notification.interface';
import { AppState } from '../store/app.reducers';
import { showErrorAlertAction } from '../store/error/error.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((e: HttpErrorResponse) => {
        const errorNotification = this.buildErrorAlert(e);
        this.store.dispatch(showErrorAlertAction(errorNotification));
        return throwError(e);
      }),
    );
  }

  private buildErrorAlert(error: HttpErrorResponse): ErrorNotification {
    const message = error.error.message.reduce(
      (previousValue: string, currentValue: string) => previousValue + '\n' + currentValue,
      '',
    );
    return { message, title: error.error.error };
  }
}
