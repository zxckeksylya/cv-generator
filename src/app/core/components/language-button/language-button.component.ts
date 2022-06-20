import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { environment } from '../../../../environments/environment.prod';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageButtonComponent implements OnInit, OnDestroy {
  public language: Language;

  public languages: Language[] = environment.locales;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.language = this.translateService.getDefaultLang() as Language;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setLanguage(language: Language): void {
    this.commitLanguage(language);
  }

  public changeLanguage(): void {
    const selectedLanguageIndex = this.languages.findIndex((value) => value === this.language);
    let newLanguage = '';
    if (selectedLanguageIndex + 1 === this.languages.length) {
      newLanguage = this.languages[0];
    } else {
      newLanguage = this.languages[selectedLanguageIndex + 1];
    }
    this.commitLanguage(newLanguage as Language);
  }

  private commitLanguage(language: Language): void {
    this.translateService.use(language);
    localStorage.setItem('language', language);
    this.language = language;
  }
}
