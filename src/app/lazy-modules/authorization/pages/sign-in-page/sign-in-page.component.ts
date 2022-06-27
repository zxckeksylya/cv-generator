import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from '../../../../core/store/app.reducers';
import { loginUserAction } from '../../../../core/store/authorization/authorization.actions';
import { formEnabledSelector } from '../../../../core/store/authorization/authorization.selectors';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent implements OnInit, OnDestroy {
  public form: UntypedFormGroup;

  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initMyForm();
    this.store
      .pipe(takeUntil(this.destroy$), select(formEnabledSelector))
      .subscribe((isEnabled) => {
        if (isEnabled) {
          this.form.enable();
        } else {
          this.form.disable();
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(loginUserAction(this.form.getRawValue()));
  }

  private initMyForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false],
    });
  }
}
