import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { DropdownModule } from 'src/app/core/components/dropdown/dropdown.module';
import { LanguageButtonModule } from 'src/app/core/components/language-button/language-button.module';
import { PageHeadingModule } from '../../core/components/page-heading/page-heading.module';
import { SiderModule } from '../../core/components/sider/sider.module';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ThemeButtonModule } from '../../core/components/theme-button/theme-button.module';

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
    ThemeButtonModule,
  ],
  declarations: [MainPageComponent, HeaderComponent, UserProfileComponent],
})
export class MainModule {}
