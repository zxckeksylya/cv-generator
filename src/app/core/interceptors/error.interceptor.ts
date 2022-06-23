import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorNotification } from '../interfaces/error-notification.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((e) => throwError(e)));
  }
  private buildErrorAlert(error: HttpErrorResponse): ErrorNotification {
    return error.error;
  }
}
