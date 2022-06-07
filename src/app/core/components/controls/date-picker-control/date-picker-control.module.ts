import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { DatePickerControlComponent } from './date-picker-control.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    NzInputModule,
    NzDatePickerModule,
    NzFormModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    GetControlErrorMessagePipeModule,
  ],
  declarations: [DatePickerControlComponent],
  exports: [DatePickerControlComponent],
})
export class DatePickerControlModule {}
