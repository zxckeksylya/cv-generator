import { NgModule } from '@angular/core';
import { AutocompleteControlComponent } from './autocomplete-control.component';
import { GetControlErrorMessagePipeModule } from '../../../pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

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
  declarations: [AutocompleteControlComponent],
  exports: [AutocompleteControlComponent],
})
export class AutocompleteControlModule {}
