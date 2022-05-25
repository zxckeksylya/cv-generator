import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { OnInit, OnDestroy, Directive, Input, Optional, DoCheck } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { I18nKeyMessageConfig } from '../../interfaces/n-key-message-config.interface';

@Directive()
export class BaseControl implements ControlValueAccessor, OnInit, DoCheck, OnDestroy {
  @Input() public errorsMap: Record<string, I18nKeyMessageConfig> = {
    required: {
      i18nKey: 'control-errors.required',
    },
  };
  @Input() public classNames = '';

  public formControl = new FormControl();

  private destroy$ = new Subject<void>();

  constructor(@Optional() protected ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.onInputValueChange();
  }
  public ngDoCheck(): void {
    this.initErrors();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    this.formControl.setValue(value, { emitEvent: false });
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

  public onTouched: () => void = () => {};

  protected initErrors(): void {
    const ngControlErrors = this.ngControl.control?.errors;
    if (ngControlErrors && ngControlErrors !== this.formControl.errors) {
      this.formControl.setErrors(ngControlErrors);
    }
  }

  private onChange: (value: any) => void = () => {};

  private onInputValueChange(): void {
    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      this.onChange(v);
    });
  }
}
