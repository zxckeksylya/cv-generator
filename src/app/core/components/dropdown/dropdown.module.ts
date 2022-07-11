import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [CommonModule, NzDropDownModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdowmModule {}
