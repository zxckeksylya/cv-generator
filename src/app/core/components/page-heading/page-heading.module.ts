import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeadingComponent } from './page-heading.component';
import { AppTranslateModule } from '../../app-translate/app-translate.module';

@NgModule({
  imports: [CommonModule, AppTranslateModule],
  declarations: [PageHeadingComponent],
  exports: [PageHeadingComponent],
})
export class PageHeadingModule {}
