import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeButtonComponent } from './theme-button.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ThemeButtonComponent],
  imports: [CommonModule, DropdownModule, ButtonModule],
  exports: [ThemeButtonComponent],
})
export class ThemeButtonModule {}
