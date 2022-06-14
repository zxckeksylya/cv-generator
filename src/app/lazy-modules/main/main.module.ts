import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BreadcrumbModule } from '../../core/components/breadcrumb/breadcrumb.module';
import { SiderModule } from '../../core/components/sider/sider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [MainPageComponent, HeaderComponent],
  imports: [MainRoutingModule, BreadcrumbModule, SiderModule, NzLayoutModule],
})
export class MainModule {}
