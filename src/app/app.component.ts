import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import {
  initThemeAction,
  setDarkThemeAction,
  setLightThemeAction,
} from './core/store/theme/theme.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(initThemeAction());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setLight(): void {
    this.store.dispatch(setLightThemeAction());
  }

  public setDark(): void {
    this.store.dispatch(setDarkThemeAction());
  }
}
