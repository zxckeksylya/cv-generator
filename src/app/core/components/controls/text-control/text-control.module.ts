import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TextControlComponent } from './text-control.component';
import { GetControlErrorMessagePipeModule } from '../../../pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';

@NgModule({
  imports: [
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    CommonModule,
    GetControlErrorMessagePipeModule,
  ],
  declarations: [TextControlComponent],
  exports: [TextControlComponent],
})
export class TextControlModule {}
