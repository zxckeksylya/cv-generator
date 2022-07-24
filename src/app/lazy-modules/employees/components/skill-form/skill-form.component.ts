import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { INameId } from '../../../../core/interfaces/name-id.interface';
import { AppState } from '../../../../core/store/app.reducers';
import { getCategoriesSelector } from '../../../../core/store/category/categories.selectors';
import { getLevelsSelector } from '../../../../core/store/level/levels.selectors';
import { getSkillsNamesSelector } from '../../../../core/store/skill/skills.selectors';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SkillFormComponent,
    },
  ],
})
export class SkillFormComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.fb.group({
    name: '',
    category: null,
    experience: null,
    lastUsed: null,
    level: null,
  });

  public skillsNames: string[] = [];

  public levels: INameId[] = [];

  public categories: INameId[] = [];

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
    this.store.pipe(select(getSkillsNamesSelector), takeUntil(this.destroy$)).subscribe(names => {
      this.skillsNames = names;
      this.cdr.markForCheck();
    });
    this.store.pipe(select(getLevelsSelector), takeUntil(this.destroy$)).subscribe(levels => {
      this.levels = levels;
      this.cdr.markForCheck();
    });
    this.store
      .pipe(select(getCategoriesSelector), takeUntil(this.destroy$))
      .subscribe(categories => {
        this.categories = categories;
        this.cdr.markForCheck();
      });
  }
}
