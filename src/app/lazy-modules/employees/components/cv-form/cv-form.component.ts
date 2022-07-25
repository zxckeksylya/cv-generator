import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CV } from 'src/app/core/interfaces/cv.interface';
import { GetProject } from 'src/app/core/interfaces/project.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { getProjectsSelector } from 'src/app/core/store/projects/projects.selectors';
import { GetEmployee } from '../../../../core/interfaces/employee.interface';
import { CreateCV, UpdateCV } from '../../../../core/interfaces/cv.interface';
import { createCVAction } from 'src/app/core/store/cv/cv.actions';
import { updateCVAction } from '../../../../core/store/cv/cv.actions';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public cv: CV;
  @Input() public user: GetEmployee;

  public form: FormGroup;

  public projects: GetProject[];

  private destroy$ = new Subject<void>();

  private isUpdate = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
  ) {
    this.initForm();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['cv'] && changes['cv'].currentValue) {
      this.form.patchValue(changes['cv'].currentValue, { emitEvent: false });
      this.isUpdate = true;
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
    if (!this.isUpdate) {
      this.store.dispatch(createCVAction(this.formatFormForCreate(this.form.getRawValue())));
    } else {
      this.store.dispatch(updateCVAction(this.formatFormForUpdate(this.form.getRawValue())));
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      projects: [],
    });
  }

  private getData(): void {
    this.store.pipe(select(getProjectsSelector), takeUntil(this.destroy$)).subscribe(data => {
      this.projects = data;
      this.cdr.markForCheck();
    });
  }

  private formatFormForCreate(obj: any): CreateCV {
    const { name, description, projects } = obj;
    return {
      projects: projects.map((item: { id: any }) => item.id),
      name,
      description,
      user: this.user.id,
    };
  }

  private formatFormForUpdate(obj: any): UpdateCV {
    const { name, description, projects } = obj;
    return {
      projects: projects.map((item: { id: any }) => item.id),
      name,
      description,
      user: this.user.id,
      id: this.cv.id,
    };
  }
}
