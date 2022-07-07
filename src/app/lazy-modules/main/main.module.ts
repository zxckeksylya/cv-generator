import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SiderModule } from '../../core/components/sider/sider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
import { PageHeadingModule } from '../../core/components/page-heading/page-heading.module';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
import { ModalModule } from 'src/app/core/components/modal/modal.module';
import { LanguageButtonModule } from '../../core/components/language-button/language-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DropdownModule } from '../../core/components/dropdown/dropdown.module';
import { ButtonModule } from '../../core/components/button/button.module';

@NgModule({
  imports: [
    MainRoutingModule,
    SiderModule,
    NzLayoutModule,
    PageHeadingModule,
    BreadcrumbModule,
    ModalModule,
    LanguageButtonModule,
    FontAwesomeModule,
    DropdownModule,
    ButtonModule,
  ],
  declarations: [MainPageComponent, HeaderComponent, UserProfileComponent],
})
export class MainModule {}
