import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from '../services/missing-translation.service';
import { environment } from '../../../environments/environment.prod';

export const httpLoaderFactory = (http: HttpClient): TranslateLoader =>
  new TranslateHttpLoader(http, './assets/locale/', '.json');

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
      useDefaultLang: false,
    }),
  ],
  exports: [TranslateModule],
})
export class AppTranslateModule {
  constructor(private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language') || environment.defaultLocale);
  }
}
