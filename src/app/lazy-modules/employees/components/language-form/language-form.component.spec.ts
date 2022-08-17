import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import zh from '@angular/common/locales/zh';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { DatePickerControlModule } from 'src/app/core/components/controls/date-picker-control/date-picker-control.module';
import { NumberControlModule } from 'src/app/core/components/controls/number-control/number-control.module';
import { SelectControlModule } from 'src/app/core/components/controls/select-control/select-control.module';
import { TextControlModule } from 'src/app/core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from 'src/app/core/components/controls/textarea-control/textarea-control.module';
import { AppState } from 'src/app/core/store/app.reducers';

import { languagesFeatureSelector } from '../../../../core/store/language/language.selectors';
import { LanguageFormComponent } from './language-form.component';
import { levelsFeatureSelector } from '../../../../core/store/level/levels.selectors';

describe('LanguageFormComponent', () => {
  let component: LanguageFormComponent;
  let fixture: ComponentFixture<LanguageFormComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageFormComponent],
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
    store.overrideSelector(languagesFeatureSelector, {
      languages: {
        id: {
          id: 'id',
          name: 'name',
          everydayReadingLevel: {
            id: 'id',
            name: 'name',
          },
          everydaySpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayWritingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalReadingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalSpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalWritingLevel: {
            id: 'id',
            name: 'name',
          },
        },
      },
      isInitLanguages: true,
      lastCreatedLanguages: {
        id: {
          id: 'id',
          name: 'name',
          everydayReadingLevel: {
            id: 'id',
            name: 'name',
          },
          everydaySpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayWritingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalReadingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalSpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalWritingLevel: {
            id: 'id',
            name: 'name',
          },
        },
      },
    });
    store.overrideSelector(levelsFeatureSelector, {
      levels: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitLevels: true,
    });
    fixture = TestBed.createComponent(LanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
