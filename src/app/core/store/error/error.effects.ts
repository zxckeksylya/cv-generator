import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { showErrorAlertAction, showErrorAlertSuccessAction } from './error.actions';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class ErrorEffects {
  public showErrorAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showErrorAlertAction),
      map((errorNotification) => {
        this.notificationService.error(errorNotification.title, errorNotification.message);
        return showErrorAlertSuccessAction();
      }),
    ),
  );

  constructor(private actions$: Actions, private notificationService: NzNotificationService) {}
}
