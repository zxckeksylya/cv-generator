import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SiderComponent } from './sider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
  imports: [NzLayoutModule, CommonModule, FontAwesomeModule, NzMenuModule],
  declarations: [SiderComponent],
  exports: [SiderComponent],
})
export class SiderModule {}
