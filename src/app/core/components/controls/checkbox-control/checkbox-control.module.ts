import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { CheckboxControlComponent } from './checkbox-control.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  imports: [
    NzCheckboxModule,
    NzFormModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    GetControlErrorMessagePipeModule,
  ],
  declarations: [CheckboxControlComponent],
  exports: [CheckboxControlComponent],
})
export class CheckboxControlModule {}
