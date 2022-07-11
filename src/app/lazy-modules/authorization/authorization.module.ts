import { NgModule } from '@angular/core';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { TextControlModule } from '../../core/components/controls/text-control/text-control.module';
import { CheckboxControlModule } from '../../core/components/controls/checkbox-control/checkbox-control.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageButtonModule } from '../../core/components/language-button/language-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    AuthorizationRoutingModule,
    TextControlModule,
    CheckboxControlModule,
    ButtonModule,
    ReactiveFormsModule,
    LanguageButtonModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  declarations: [AuthorizationPageComponent, SignInPageComponent],
})
export class AuthorizationModule {}
