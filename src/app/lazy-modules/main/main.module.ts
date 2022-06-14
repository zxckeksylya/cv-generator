import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SiderModule } from '../../core/components/sider/sider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
import { PageHeadingModule } from '../../core/components/page-heading/page-heading.module';
@NgModule({
  declarations: [MainPageComponent, HeaderComponent],
  imports: [MainRoutingModule, SiderModule, NzLayoutModule, PageHeadingModule],
})
export class MainModule {}
