import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeadingComponent } from './page-heading.component';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [PageHeadingComponent],
  exports: [PageHeadingComponent],
})
export class PageHeadingModule {}
