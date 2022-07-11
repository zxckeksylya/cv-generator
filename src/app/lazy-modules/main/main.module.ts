import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { DropdownModule } from '../../core/components/dropdown/dropdown.module';
import { LanguageButtonModule } from '../../core/components/language-button/language-button.module';
import { PageHeadingModule } from '../../core/components/page-heading/page-heading.module';
import { SiderModule } from '../../core/components/sider/sider.module';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  imports: [
    MainRoutingModule,
    SiderModule,
    NzLayoutModule,
    PageHeadingModule,
    BreadcrumbModule,
    LanguageButtonModule,
    FontAwesomeModule,
    DropdownModule,
    ButtonModule,
    NzModalModule,
  ],
  declarations: [MainPageComponent, HeaderComponent, UserProfileComponent],
})
export class MainModule {}
