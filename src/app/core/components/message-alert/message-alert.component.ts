import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppState } from 'src/app/core/store/app.reducers';
import { select, Store } from '@ngrx/store';
import { alertSelector } from '../../store/alert/alert.selectors';
import { Subject, takeUntil } from 'rxjs';
import { setAlertsAction } from '../../store/alert/alert.actions';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageAlertComponent implements OnInit, OnDestroy {
  public errors: string[] = [];
  private $destroy = new Subject<void>();
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;
  constructor(private notifactionService: NzNotificationService, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.pipe(select(alertSelector), takeUntil(this.$destroy)).subscribe((value) => {
      if (value.length !== 0) {
        console.log(value);
        value.forEach((error) =>
          this.notifactionService.template(this.template!, { nzData: error }),
        );
        this.store.dispatch(setAlertsAction({ errors: [] }));
      }
    });
  }
  public ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
