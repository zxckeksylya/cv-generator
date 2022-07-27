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
import { CollapseItem } from 'src/app/core/interfaces/collapse-item.interface';

@Component({
  selector: 'app-virtual-cv-project-form',
  templateUrl: './virtual-cv-project-form.component.html',
  styleUrls: ['./virtual-cv-project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: VirtualCvProjectFormComponent,
    },
  ],
})
export class VirtualCvProjectFormComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public form: FormGroup = this.fb.group({
    name: '',
    startDate: '',
    endDate: '',
    teamSize: '',
    tasksPerformed: '',
    description: '',
    projectRoles: this.fb.array([]),
    responsibilities: this.fb.array([]),
    specializations: this.fb.array([]),
  });

  public projectRolesCollapseItems: CollapseItem[] = [];

  public responsibilitiesCollapseItems: CollapseItem[] = [];

  public specializationsCollapseItems: CollapseItem[] = [];

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
      if (value.projectRoles) {
        value.projectRoles.forEach((element: { name: string }) => {
          this.addProjectRole(element.name);
        });
      }
      if (value.responsibilities) {
        value.responsibilities.forEach((element: { name: string }) => {
          this.addResponsibility(element.name);
        });
      }
      if (value.specializations) {
        value.specializations.forEach((element: string) => {
          this.addSpecialization(element);
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

  public addProjectRole(name: string): void {
    this.projectRolesCollapseItems = [
      ...this.projectRolesCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('projectRoles') as FormArray).push(new FormControl());
  }

  public deleteProjectRole(index: number): void {
    if ((this.form.get('projectRoles') as FormArray).controls.length > 1) {
      this.projectRolesCollapseItems.splice(index, 1);
      (this.form.get('projectRoles') as FormArray).removeAt(index);
    }
  }

  public addSpecialization(name: string): void {
    this.specializationsCollapseItems = [
      ...this.specializationsCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('specializations') as FormArray).push(new FormControl());
  }

  public deleteSpecialization(index: number): void {
    if ((this.form.get('specializations') as FormArray).controls.length > 1) {
      this.specializationsCollapseItems.splice(index, 1);
      (this.form.get('specializations') as FormArray).removeAt(index);
    }
  }

  public addResponsibility(name: string): void {
    this.responsibilitiesCollapseItems = [
      ...this.responsibilitiesCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('responsibilities') as FormArray).push(new FormControl());
  }

  public deleteResponsibility(index: number): void {
    if ((this.form.get('responsibilities') as FormArray).controls.length > 1) {
      this.responsibilitiesCollapseItems.splice(index, 1);
      (this.form.get('responsibilities') as FormArray).removeAt(index);
    }
  }

  protected onInputValueChange(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
    });
  }
}
