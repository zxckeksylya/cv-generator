import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';

import { EmployeeInfoPageComponent } from './employee-info-page.component';
import { employeesFeatureSelector } from '../../../../core/store/employess/employees.selectors';
import { cvFeatureSelector } from 'src/app/core/store/cv/cv.selectors';

describe('EmployeeInfoPageComponent', () => {
  let component: EmployeeInfoPageComponent;
  let fixture: ComponentFixture<EmployeeInfoPageComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };

  const ActivatedRouteMock = {
    params: { id: 'id' },
    paramMap: of(convertToParamMap({ id: 'id' })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeInfoPageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(employeesFeatureSelector, {
      employees: {},
      isInitEmployees: false,
      activatedEmployee: '',
    });
    store.overrideSelector(cvFeatureSelector, {
      cvs: {},
      isInitCVs: false,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(EmployeeInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
