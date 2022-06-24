import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { map } from 'rxjs';
import { showErrorAlertAction, setAlertAction, showSuccessAlertAction } from './alert.actions';
import { TypeOfAlertConstants } from '../../constants/type-of-alert.constants';

@Injectable()
export class ALertEffects {
  public showAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setAlertAction),
      map((alertNotification) => {
        switch (alertNotification.typeOfAlert) {
          case TypeOfAlertConstants.ERROR: {
            this.notificationService.error(alertNotification.title, alertNotification.message);
            return showErrorAlertAction();
          }
          case TypeOfAlertConstants.SUCCESS: {
            this.notificationService.success(alertNotification.title, alertNotification.message);
            return showSuccessAlertAction();
          }
        }
      }),
    ),
  );

  constructor(private actions$: Actions, private notificationService: NzNotificationService) {}
}
