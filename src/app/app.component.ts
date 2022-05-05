import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { Language } from './core/interfaces/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public selectedLanguage = '';
  public languages: Language[] = [];

  private destroy$ = new Subject<void>();

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public changeLocale(): void {
    this.translateService.use(this.selectedLanguage);
  }
}
