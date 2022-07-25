import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { getRolesSelector } from 'src/app/core/store/role/roles.selectors';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { CollapseItem } from '../../../../core/interfaces/collapse-item.interface';
import { EmployeeForm, GetEmployee } from '../../../../core/interfaces/employee.interface';
import { INameId } from '../../../../core/interfaces/name-id.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public employee: GetEmployee;

  @Output() public submitted = new EventEmitter<EmployeeForm>();

  public readonly faXmark = faXmark;

  public form: FormGroup;

  public role: INameId[] = [];

  public languagesCollapseItems: CollapseItem[] = [];

  public skillsCollapseItems: CollapseItem[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
  ) {
    this.initForm();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && changes['employee'].currentValue) {
      changes['employee'].currentValue.languages.forEach(() => {
        this.addLanguage();
      });
      changes['employee'].currentValue.skills.forEach(() => this.addSkill());
      this.form.patchValue(changes['employee'].currentValue, { emitEvent: false });
    }
  }

  public ngOnInit(): void {
    if (this.getLanguagesControls().length === 0) {
      this.addLanguage();
    }
    if (this.getSkillsControls().length === 0) {
      this.addSkill();
    }
    this.getData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.formatEmployee(this.form.getRawValue()));
  }

  public backToEmployees(): void {
    this.form.reset();
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.EMPLOYEES]);
  }

  public getLanguagesControls(): any {
    return (this.form.get('languages') as FormArray).controls;
  }

  public addLanguage(): void {
    this.languagesCollapseItems = [
      ...this.languagesCollapseItems,
      { active: false, name: 'language', disabled: false },
    ];
    (this.form.get('languages') as FormArray).push(new FormControl());
  }

  public deleteLanguage(index: number): void {
    if (this.getLanguagesControls().length > 1) {
      this.languagesCollapseItems.splice(index, 1);
      (this.form.get('languages') as FormArray).removeAt(index);
    }
  }

  public getSkillsControls(): any {
    return (this.form.get('skills') as FormArray).controls;
  }

  public addSkill(): void {
    this.skillsCollapseItems = [
      ...this.skillsCollapseItems,
      { active: false, name: 'skill', disabled: false },
    ];
    const control = this.form.get('skills') as FormArray;
    control.push(new FormControl());
  }

  public deleteSkill(index: number): void {
    if (this.getSkillsControls().length > 1) {
      this.skillsCollapseItems.splice(index, 1);
      (this.form.get('skills') as FormArray).removeAt(index);
    }
  }

  private formatEmployee(employee: any): EmployeeForm {
    const languages = employee.languages.map((item: any) => {
      const newItem = {
        name: item.name,
        everydayReadingLevel: item.everydayReadingLevel.id,
        everydaySpeakingLevel: item.everydaySpeakingLevel.id,
        everydayWritingLevel: item.everydayWritingLevel.id,
        professionalReadingLevel: item.professionalReadingLevel.id,
        professionalSpeakingLevel: item.professionalSpeakingLevel.id,
        professionalWritingLevel: item.professionalWritingLevel.id,
      };
      return newItem;
    });

    const skills = employee.skills.map((item: any) => {
      const newItem = {
        name: item.name,
        category: item.category.id,
        level: item.level.id,
        experience: item.experience,
        lastUsed: item.lastUsed,
      };
      return newItem;
    });
    const { role, ...data } = employee;
    const user = {
      ...data,
      role: role.id,
      languages,
      skills,
    };
    return user;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      institution: '',
      diplomaProfession: '',
      department: '',
      role: '',
      skills: this.formBuilder.array([]),
      languages: this.formBuilder.array([]),
    });
  }

  private getData(): void {
    this.store.pipe(select(getRolesSelector), takeUntil(this.destroy$)).subscribe(data => {
      this.role = data;
      this.cdr.markForCheck();
    });
  }
}
