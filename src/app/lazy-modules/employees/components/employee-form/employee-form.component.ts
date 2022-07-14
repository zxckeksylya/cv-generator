import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GetEmployee, UpdateEmployee } from '../../../../core/interfaces/employee.interface';
import { INameId } from '../../../../core/interfaces/name-id.interface';
import { Language } from '../../../../core/interfaces/language.interface';
import { Skill } from 'src/app/core/interfaces/skill.interface';
import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/store/app.reducers';
import { select, Store } from '@ngrx/store';
import { getArrayIdOutINameId } from '../../../../core/utils/get-array-id-out-i-name-id.util';
import { getSkillsSelector } from 'src/app/core/store/skill/skills.selectors';
import { getRolesSelector } from 'src/app/core/store/role/roles.selectors';
import { getLanguagesSelector } from 'src/app/core/store/language/language.selectors';
import { RoutingConstants } from '../../../../core/constants/routing.constants';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public employee: GetEmployee;

  @Output() public submitted = new EventEmitter<UpdateEmployee>();

  public form: FormGroup;

  public role: INameId[] = [];

  public languages: Language[] = [];

  public skills: Skill[] = [];

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
      this.form.patchValue(changes['employee'].currentValue, { emitEvent: false });
    }
  }

  public ngOnInit(): void {
    this.getData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form.invalid);
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.formatEmployee(this.form.getRawValue()));
  }

  public backToEmployees(): void {
    this.form.reset();
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.EMPLOYEES]);
  }

  private formatEmployee(employee: GetEmployee): UpdateEmployee {
    const { languages, skills, role, ...data } = employee;
    const user = {
      ...data,
      languages: getArrayIdOutINameId(languages),
      skills: getArrayIdOutINameId(skills),
      role: role.id,
    };
    console.log(user);
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
      skills: [],
      languages: [],
    });
  }

  private getData(): void {
    this.store.pipe(select(getSkillsSelector), takeUntil(this.destroy$)).subscribe((data) => {
      this.skills = data;
      this.cdr.markForCheck();
    });
    this.store.pipe(select(getRolesSelector), takeUntil(this.destroy$)).subscribe((data) => {
      this.role = data;
      this.cdr.markForCheck();
    });
    this.store.pipe(select(getLanguagesSelector), takeUntil(this.destroy$)).subscribe((data) => {
      this.languages = data;
      this.cdr.markForCheck();
    });
  }
}
