import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { getLanguagesNamesSelector } from 'src/app/core/store/language/language.selectors';
import { INameId } from '../../../../core/interfaces/name-id.interface';
import { getLevelsSelector } from '../../../../core/store/level/levels.selectors';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: LanguageFormComponent,
    },
  ],
})
export class LanguageFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public form: FormGroup = this.fb.group({
    name: '',
    everydayReadingLevel: null,
    everydayWritingLevel: null,
    everydaySpeakingLevel: null,
    professionalReadingLevel: null,
    professionalWritingLevel: null,
    professionalSpeakingLevel: null,
  });

  public languagesNames: string[] = [];

  public levels: INameId[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initData();
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

  private initData(): void {
    this.store
      .pipe(select(getLanguagesNamesSelector), takeUntil(this.destroy$))
      .subscribe(names => {
        this.languagesNames = names;
        this.cdr.markForCheck();
      });
    this.store.pipe(select(getLevelsSelector), takeUntil(this.destroy$)).subscribe(levels => {
      this.levels = levels;
      this.cdr.markForCheck();
    });
  }
}
