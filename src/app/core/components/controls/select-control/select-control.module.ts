import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectControlComponent } from './select-control.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GetControlErrorMessagePipeModule } from '../../../pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    NzSelectModule,
    NzFormModule,
    ReactiveFormsModule,
    TranslateModule,
    GetControlErrorMessagePipeModule,
    FormsModule,
  ],
  declarations: [SelectControlComponent],
  exports: [SelectControlComponent],
})
export class SelectControlModule {}
