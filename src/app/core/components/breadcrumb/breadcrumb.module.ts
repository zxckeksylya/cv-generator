import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NzBreadCrumbModule, RouterModule, TranslateModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
