import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/core/store/autorization/autorization.actions';
import { AppState } from '../../../../core/store/app.reducers';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initMyForm();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.form.disable();
      this.store.dispatch(loginAction(this.form.getRawValue()));
      this.form.enable();
    }
  }

  private initMyForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false],
    });
  }
}
