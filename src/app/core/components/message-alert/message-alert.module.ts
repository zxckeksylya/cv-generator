import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageAlertComponent } from './message-alert.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  imports: [CommonModule, NzNotificationModule, AlertModule],
  declarations: [MessageAlertComponent],
  exports: [MessageAlertComponent],
})
export class MessageAlertModule {}
