import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { map } from 'rxjs';
import { showErrorAlertAction, showSuccessAlertAction } from './alert.actions';

@Injectable()
export class ALertEffects {
  public showErrorAlert$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showErrorAlertAction),
        map((alertNotification) =>
          this.notificationService.error(alertNotification.title, alertNotification.message),
        ),
      ),
    { dispatch: false },
  );

  public showSuccessAlert$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showSuccessAlertAction),
        map((alertNotification) =>
          this.notificationService.success(alertNotification.title, alertNotification.message),
        ),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private notificationService: NzNotificationService) {}
}
