import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { VirtualCvProjectFormComponent } from './virtual-cv-project-form.component';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextControlModule } from '../../../../core/components/controls/text-control/text-control.module';
import { NumberControlModule } from '../../../../core/components/controls/number-control/number-control.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerControlModule } from 'src/app/core/components/controls/date-picker-control/date-picker-control.module';
import { SelectControlModule } from 'src/app/core/components/controls/select-control/select-control.module';
import { TextareaControlModule } from 'src/app/core/components/controls/textarea-control/textarea-control.module';
import zh from '@angular/common/locales/zh';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { AppState } from 'src/app/core/store/app.reducers';

describe('VirtualCvProjectFormComponent', () => {
  let component: VirtualCvProjectFormComponent;
  let fixture: ComponentFixture<VirtualCvProjectFormComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualCvProjectFormComponent],
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
    }).compileComponents();
    registerLocaleData(zh);
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(VirtualCvProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should add', () => {
    it('projectRole', () => {
      component.addProjectRole('name');
      expect(component.projectRolesCollapseItems[0].name).toBe('name');
    });
    it('specialization', () => {
      component.addSpecialization('name');
      expect(component.specializationsCollapseItems[0].name).toBe('name');
    });
    it('responsibility', () => {
      component.addResponsibility('name');
      expect(component.responsibilitiesCollapseItems[0].name).toBe('name');
    });
  });

  describe('should delete', () => {
    it('projectRole', () => {
      component.addProjectRole('name0');
      component.addProjectRole('name1');
      component.deleteProjectRole(0);
      expect(component.projectRolesCollapseItems[0].name).toBe('name1');
    });

    it('specialization', () => {
      component.addSpecialization('name0');
      component.addSpecialization('name1');
      component.deleteSpecialization(0);
      expect(component.specializationsCollapseItems[0].name).toBe('name1');
    });

    it('responsibility', () => {
      component.addResponsibility('name0');
      component.addResponsibility('name1');
      component.deleteResponsibility(0);
      expect(component.responsibilitiesCollapseItems[0].name).toBe('name1');
    });
  });
});
