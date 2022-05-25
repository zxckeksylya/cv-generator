import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTranslateModule } from './core/app-translate/app-translate.module';
import { TextControlModule } from './core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from './core/components/controls/textarea-control/textarea-control.module';
import { AppStoreModule } from './core/store/app-store.module';
import { AutocompleteControlModule } from './core/components/controls/autocomplete-control/autocomplete-control.module';
import { ButtonModule } from './core/components/button/button.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppStoreModule,
    AppTranslateModule,
    TextControlModule,
    TextareaControlModule,
    AutocompleteControlModule,
    ButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
