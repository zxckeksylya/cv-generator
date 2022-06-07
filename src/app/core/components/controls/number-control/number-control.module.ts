import { NgModule } from '@angular/core';
import { NumberControlComponent } from './number-control.component';
import { CommonModule } from '@angular/common';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    NzInputNumberModule,
    GetControlErrorMessagePipeModule,
    ReactiveFormsModule,
    TranslateModule,
    NzInputModule,
    NzFormModule,
  ],
  declarations: [NumberControlComponent],
  exports: [NumberControlComponent],
})
export class NumberControlModule {}
