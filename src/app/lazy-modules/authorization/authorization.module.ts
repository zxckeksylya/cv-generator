import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../../core/components/button/button.module';
import { CheckboxControlModule } from '../../core/components/controls/checkbox-control/checkbox-control.module';
import { TextControlModule } from '../../core/components/controls/text-control/text-control.module';
import { LanguageButtonModule } from '../../core/components/language-button/language-button.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';

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
