import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { TextareaControlComponent } from './textarea-control.component';

@NgModule({
  imports: [
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    GetControlErrorMessagePipeModule,
  ],
  declarations: [TextareaControlComponent],
  exports: [TextareaControlComponent],
})
export class TextareaControlModule {}
