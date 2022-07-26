import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SiderComponent } from './sider.component';

@NgModule({
  imports: [NzLayoutModule, CommonModule, FontAwesomeModule, NzMenuModule, TranslateModule],
  declarations: [SiderComponent],
  exports: [SiderComponent],
})
export class SiderModule {}
