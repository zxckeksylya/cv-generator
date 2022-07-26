import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { CollapseItem } from '../../../../core/interfaces/collapse-item.interface';

@Component({
  selector: 'app-virtual-cv-skill-form',
  templateUrl: './virtual-cv-skill-form.component.html',
  styleUrls: ['./virtual-cv-skill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: VirtualCvSkillFormComponent,
    },
  ],
})
export class VirtualCvSkillFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public form: FormGroup = this.fb.group({
    skillType: '',
    skillsOfType: this.fb.array([]),
  });

  public skillsOfTypeCollapseItems: CollapseItem[] = [];

  public readonly faXmark = faXmark;

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
      if (value.skillsOfType) {
        value.skillsOfType.forEach((element: { skillName: string }) => {
          this.addSkillOfType(element.skillName);
        });
      }
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

  public deleteSkillOfType(index: number): void {
    if ((this.form.get('skillsOfType') as FormArray).controls.length > 1) {
      this.skillsOfTypeCollapseItems.splice(index, 1);
      (this.form.get('skillsOfType') as FormArray).removeAt(index);
    }
  }

  public addSkillOfType(name: string): void {
    this.skillsOfTypeCollapseItems = [
      ...this.skillsOfTypeCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('skillsOfType') as FormArray).push(new FormControl());
  }

  protected onInputValueChange(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
    });
  }
}
