import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageButtonComponent } from './language-button.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ButtonModule } from '../button/button.module';
import { DropdowmModule } from '../dropdown/dropdown.module';
@NgModule({
  imports: [CommonModule, NzDropDownModule, ButtonModule, DropdowmModule],
  declarations: [LanguageButtonComponent],
  exports: [LanguageButtonComponent],
})
export class LanguageButtonModule {}
