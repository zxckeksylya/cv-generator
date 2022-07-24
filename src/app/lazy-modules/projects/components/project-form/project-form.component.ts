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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { getResponsibilitiesSelector } from 'src/app/core/store/responsibilities/responsibilities.selectors';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { INameId } from '../../../../core/interfaces/name-id.interface';
import { GetProject, UpdateProject } from '../../../../core/interfaces/project.interface';
import { getProjectRolesSelector } from '../../../../core/store/projects-roles/project-roles.selectors';
import { getSpecializationsSelector } from '../../../../core/store/specializations/specializations.selectors';
import { formatDate } from '../../../../core/utils/format-date.util';
import { getArrayIdOutINameId } from '../../../../core/utils/get-array-id-out-i-name-id.util';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public project: GetProject;

  @Output() public submitted = new EventEmitter<UpdateProject>();

  public form: FormGroup;

  public projectRole: INameId[] = [];

  public specializations: INameId[] = [];

  public responsibilities: INameId[] = [];

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
    if (changes['project'] && changes['project'].currentValue) {
      this.form.patchValue(changes['project'].currentValue, { emitEvent: false });
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
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.formatProject(this.form.getRawValue()));
  }

  public backToProjects(): void {
    this.form.reset();
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.PROJECTS]);
  }

  private formatProject(project: GetProject): UpdateProject {
    const { startDate, endDate, specializations, responsibilities, projectRoles, ...data } =
      project;
    const newProject: UpdateProject = {
      ...data,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      specializations: getArrayIdOutINameId(specializations),
      responsibilities: getArrayIdOutINameId(responsibilities),
      projectRoles: getArrayIdOutINameId(projectRoles),
    };
    return newProject;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      secondName: '',
      startDate: '',
      endDate: '',
      teamSize: 0,
      tasksPerformed: '',
      description: '',
      projectRoles: [],
      specializations: [],
      responsibilities: [],
    });
  }

  private getData(): void {
    this.store.pipe(select(getProjectRolesSelector), takeUntil(this.destroy$)).subscribe(data => {
      this.projectRole = data;
      this.cdr.markForCheck();
    });
    this.store
      .pipe(select(getSpecializationsSelector), takeUntil(this.destroy$))
      .subscribe(data => {
        this.specializations = data;
        this.cdr.markForCheck();
      });
    this.store
      .pipe(select(getResponsibilitiesSelector), takeUntil(this.destroy$))
      .subscribe(data => {
        this.responsibilities = data;
        this.cdr.markForCheck();
      });
  }
}
