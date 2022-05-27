import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Themes } from './core/enums/themes';
import { AppState } from './core/store/app.reducers';
import { changeThemeAction, initThemeAction } from './core/store/theme/theme.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public fg: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.store.dispatch(initThemeAction());
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setLight(): void {
    this.store.dispatch(changeThemeAction({ theme: Themes.LIGHT }));
  }

  public setDark(): void {
    this.store.dispatch(changeThemeAction({ theme: Themes.DARK }));
  }
  public submitForm(): void {
    if (this.fg.valid) {
      this.fg.reset();
      //this.fg.get('control')?.markAsPristine();
    }
  }
  private initForm(): void {
    this.fg = this.formBuilder.group({
      control: ['', [Validators.required]],
      textarea: [''],
      autocomplite: [''],
      datePicker: [''],
    });
  }
}
