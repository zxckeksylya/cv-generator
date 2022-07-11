import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SiderModule } from '../../core/components/sider/sider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
import { PageHeadingModule } from '../../core/components/page-heading/page-heading.module';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';

@NgModule({
  imports: [MainRoutingModule, SiderModule, NzLayoutModule, PageHeadingModule, BreadcrumbModule],
  declarations: [MainPageComponent, HeaderComponent],
})
export class MainModule {}
