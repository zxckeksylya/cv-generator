import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-virtual-cv-general-form',
  templateUrl: './virtual-cv-general-form.component.html',
  styleUrls: ['./virtual-cv-general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: VirtualCvGeneralFormComponent,
    },
  ],
})
export class VirtualCvGeneralFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public form: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    name: '',
  });

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.onInputValueChange();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(disable: boolean): void {
    if (disable) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  public onTouched: () => void = () => {};

  public onChange: (value: any) => void = () => {};

  protected onInputValueChange(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
    });
  }
}
