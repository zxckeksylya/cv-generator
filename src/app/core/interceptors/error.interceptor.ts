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
import { AlertNotification } from '../interfaces/alert-notification.interface';
import { showErrorAlertAction } from '../store/alert/alert.actions';
import { AppState } from '../store/app.reducers';

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

  private buildErrorAlert(error: HttpErrorResponse): AlertNotification {
    const message = error.error.message.reduce(
      (previousValue: string, currentValue: string) => previousValue + '\n' + currentValue,
      '',
    );
    return { message, title: error.error.error };
  }
}
