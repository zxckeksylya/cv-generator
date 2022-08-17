import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { AppState } from 'src/app/core/store/app.reducers';
import { EmployeesListPageComponent } from './employees-list-page.component';

describe('EmployeesListPageComponent', () => {
  let component: EmployeesListPageComponent;
  let fixture: ComponentFixture<EmployeesListPageComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [EmployeesListPageComponent],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
