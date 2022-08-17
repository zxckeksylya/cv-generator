import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import zh from '@angular/common/locales/zh';
import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { first } from 'rxjs';
import { responsibilitiesFeatureSelector } from 'src/app/core/store/responsibilities/responsibilities.selectors';
import { AppTranslateModule } from '../../../../core/app-translate/app-translate.module';
import { DatePickerControlModule } from '../../../../core/components/controls/date-picker-control/date-picker-control.module';
import { NumberControlModule } from '../../../../core/components/controls/number-control/number-control.module';
import { SelectControlModule } from '../../../../core/components/controls/select-control/select-control.module';
import { TextControlModule } from '../../../../core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from '../../../../core/components/controls/textarea-control/textarea-control.module';
import { AppState } from '../../../../core/store/app.reducers';
import { projectRolesFeatureSelector } from '../../../../core/store/projects-roles/project-roles.selectors';
import { specializationsFeatureSelector } from '../../../../core/store/specializations/specializations.selectors';
import { ProjectFormComponent } from './project-form.component';

describe('ProjectFormComponent', () => {
  let component: ProjectFormComponent;
  let fixture: ComponentFixture<ProjectFormComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectFormComponent],
      imports: [
        ReactiveFormsModule,
        AppTranslateModule,
        HttpClientTestingModule,
        TextControlModule,
        NumberControlModule,
        DatePickerControlModule,
        SelectControlModule,
        TextareaControlModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
      providers: [{ provide: Router, useValue: routerMock }, provideMockStore(), NzI18nService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    registerLocaleData(zh);
    store = TestBed.inject(MockStore);
    store.overrideSelector(specializationsFeatureSelector, {
      specializations: {
        id: { id: 'id', name: 'name' },
      },
      isInitSpecializations: true,
    });

    store.overrideSelector(projectRolesFeatureSelector, {
      projectRoles: {
        id: { id: 'id', name: 'name' },
      },
      isInitProjectRoles: true,
    });

    store.overrideSelector(responsibilitiesFeatureSelector, {
      responsibilities: {
        id: { id: 'id', name: 'name' },
      },
      isInitResponsibilities: true,
    });
    fixture = TestBed.createComponent(ProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should backToProjects navigate', () => {
    component.backToProjects();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit format form', () => {
    component.form.patchValue({
      id: 'id',
      name: 'string',
      secondName: 'string',
      startDate: '2022-06-30T21:00:00.000Z',
      endDate: '2022-06-30T21:00:00.000Z',
      teamSize: 1,
      description: 'string',
      tasksPerformed: 'string',
      projectRoles: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      specializations: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      responsibilities: [
        {
          id: 'id',
          name: 'name',
        },
      ],
    });

    const project: any = {
      name: 'string',
      secondName: 'string',
      startDate: '2022-06-30T21:00:00.000Z',
      endDate: '2022-06-30T21:00:00.000Z',
      teamSize: 1,
      description: 'string',
      tasksPerformed: 'string',
      projectRoles: ['id'],
      specializations: ['id'],
      responsibilities: ['id'],
    };

    component.submitted.pipe(first()).subscribe((value: any) => {
      expect(value).toEqual(project);
    });

    component.onSubmit();
  });

  it('should dont submit form if invalid', () => {
    component.form.patchValue({
      id: 'id',
      name: '',
      secondName: 'string',
      startDate: '2022-06-30T21:00:00.000Z',
      endDate: '2022-06-30T21:00:00.000Z',
      teamSize: 0,
      description: 'string',
      tasksPerformed: 'string',
      projectRoles: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      specializations: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      responsibilities: [
        {
          id: 'id',
          name: 'name',
        },
      ],
    });

    const newSpy = spyOn(component.form, 'getRawValue');
    component.onSubmit();
    expect(newSpy).not.toHaveBeenCalled();
  });

  it('should patchValue on form when simple changes is truthy', () => {
    const project: any = {
      id: 'id',
      name: 'ewq',
      secondName: 'string',
      startDate: '2022-06-30T21:00:00.000Z',
      endDate: '2022-06-30T21:00:00.000Z',
      teamSize: 0,
      description: 'string',
      tasksPerformed: 'string',
      projectRoles: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      specializations: [
        {
          id: 'id',
          name: 'name',
        },
      ],
      responsibilities: [
        {
          id: 'id',
          name: 'name',
        },
      ],
    };

    const changes: SimpleChanges = {
      project: {
        currentValue: project,
        previousValue: { ...project, name: 'string' },
        firstChange: true,
        isFirstChange: () => true,
      },
    };

    component.ngOnChanges(changes);
    expect(component.form.getRawValue().name).toEqual('ewq');
  });
});
