import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import {
  changeLanguageAction,
  initLanguageSuccessAction,
  initLanguageAction,
} from './language.actions';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class LanguageEffects {
  public changeLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeLanguageAction),
        map((parameter) => {
          const { language } = parameter;
          this.translateService.use(language);
          localStorage.setItem('language', language);
          return initLanguageSuccessAction({ language });
        }),
      ),
    { dispatch: false },
  );

  public initLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(initLanguageAction),
        map(() => {
          const language = localStorage.getItem('language') || environment.defaultLocale;
          this.translateService.use(language);
          return initLanguageSuccessAction({ language });
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private translateService: TranslateService) {}
}
