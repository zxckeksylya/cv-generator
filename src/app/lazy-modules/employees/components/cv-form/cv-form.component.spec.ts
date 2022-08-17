import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { DatePickerControlModule } from 'src/app/core/components/controls/date-picker-control/date-picker-control.module';
import { NumberControlModule } from 'src/app/core/components/controls/number-control/number-control.module';
import { SelectControlModule } from 'src/app/core/components/controls/select-control/select-control.module';
import { TextControlModule } from 'src/app/core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from 'src/app/core/components/controls/textarea-control/textarea-control.module';
import { AppState } from 'src/app/core/store/app.reducers';

import { CvFormComponent } from './cv-form.component';

describe('CvFormComponent', () => {
  let component: CvFormComponent;
  let fixture: ComponentFixture<CvFormComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      declarations: [CvFormComponent],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
