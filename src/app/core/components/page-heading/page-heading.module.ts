import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeadingComponent } from './page-heading.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [PageHeadingComponent],
  exports: [PageHeadingComponent],
})
export class PageHeadingModule {}
