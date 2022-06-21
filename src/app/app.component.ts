import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.reducers';
import { initThemeAction } from './core/store/theme/theme.actions';
import { TranslateService } from '@ngx-translate/core';
import { initTokenAction } from './core/store/autorization/autorization.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private translateService: TranslateService) {}

  public ngOnInit(): void {
    this.store.dispatch(initThemeAction());
    this.store.dispatch(initTokenAction());
  }
}
