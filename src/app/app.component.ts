import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedLanguage = '';
  public languages: { id: string; title: string }[] = [];

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
    this.selectedLanguage = environment.defaultLocale;
    this.translateService
      .get(environment.locales.map((x) => `LANGUAGES.${x.toUpperCase()}`))
      .subscribe((translations) => {
        this.languages = environment.locales.map((x) => ({
          id: x,
          title: translations[`LANGUAGES.${x.toUpperCase()}`],
        }));
      });
  }

  public changeLocale(): void {
    this.translateService.use(this.selectedLanguage);
  }
}
