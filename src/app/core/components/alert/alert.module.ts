import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  imports: [CommonModule, NzAlertModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertModule {}
