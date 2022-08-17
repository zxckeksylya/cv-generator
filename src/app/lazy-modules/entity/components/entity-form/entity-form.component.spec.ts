import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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

import { EntityFormComponent } from './entity-form.component';
import { Location } from '@angular/common';

describe('EntityFormComponent', () => {
  let component: EntityFormComponent;
  let fixture: ComponentFixture<EntityFormComponent>;
  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;
  let location: any;
  let spyLocation: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };

  const locationMock = {
    back: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityFormComponent],
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
      providers: [
        { provide: Router, useValue: routerMock },
        provideMockStore(),
        NzI18nService,
        { provide: Location, useValue: locationMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(EntityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    spy = spyOn(router, 'navigate');
    spyLocation = spyOn(location, 'back');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should back', () => {
    component.back();
    fixture.detectChanges();
    expect(spyLocation).toHaveBeenCalled();
  });
});
