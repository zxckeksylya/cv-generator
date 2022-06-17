import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initMyForm();
  }

  public onSubmit(): void {
    if (this.myForm.valid) {
      this.myForm.reset();
    }
  }

  private initMyForm(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [''],
    });
  }
}
