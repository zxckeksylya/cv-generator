import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { environment } from '../../../../environments/environment.prod';
import { changeLanguageAction } from '../../store/language/language.actions';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageButtonComponent {
  public language = localStorage.getItem('language') || environment.defaultLocale;

  public languages: string[] = environment.locales;

  constructor(private store: Store<AppState>) {}

  public setLanguage(language: string): void {
    this.store.dispatch(changeLanguageAction({ language }));
    this.language = language;
  }

  public changeLanguage(): void {
    const numberOfSelectedLanguage = this.languages.findIndex((value) => value === this.language);
    let newLanguage = '';
    if (numberOfSelectedLanguage + 1 === this.languages.length) {
      newLanguage = this.languages[0];
    } else {
      newLanguage = this.languages[numberOfSelectedLanguage + 1];
    }
    this.store.dispatch(changeLanguageAction({ language: newLanguage }));
    this.language = newLanguage;
  }
}
