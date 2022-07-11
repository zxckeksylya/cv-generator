import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NzDropDownModule, TranslateModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
