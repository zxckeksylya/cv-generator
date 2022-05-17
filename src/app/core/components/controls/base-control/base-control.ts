import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { OnInit, OnDestroy, Directive } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Directive()
export class BaseControl implements ControlValueAccessor, OnInit, OnDestroy {
  public formControl = new FormControl();
  private destroy$ = new Subject<void>();

  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  constructor(private ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.onInputValueChange();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    this.formControl.setValue(value);
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  private onInputValueChange(): void {
    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      this.onChange(v);
    });
  }
}
