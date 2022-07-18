import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Themes } from '../../enums/themes.enum';
import { AppState } from '../../store/app.reducers';
import { changeThemeAction } from '../../store/theme/theme.actions';
import { themeSelector } from '../../store/theme/theme.selectors';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent implements OnInit, OnDestroy {
  public theme: Themes;

  public themes: Themes[] = [Themes.DARK, Themes.LIGHT];

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.store.pipe(select(themeSelector), takeUntil(this.destroy$)).subscribe((theme) => {
      this.theme = theme as Themes;
      this.cdr.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setTheme(theme: Themes): void {
    this.commitTheme(theme);
  }

  public changeTheme(): void {
    const selectedThemeIndex = this.themes.findIndex((value) => value === this.theme);
    let newTheme: Themes;
    if (selectedThemeIndex + 1 === this.themes.length) {
      newTheme = this.themes[0];
    } else {
      newTheme = this.themes[selectedThemeIndex + 1];
    }

    this.commitTheme(newTheme);
  }

  private commitTheme(theme: Themes): void {
    this.store.dispatch(changeThemeAction({ theme }));
  }
}
