import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';
import { CreateEmployee } from '../../../../core/interfaces/employee.interface';
import { createEmployeeAction } from '../../../../core/store/employess/employees.actions';
import { EmployeeCreatePageComponent } from './employee-create-page.component';

describe('EmployeeCreatePageComponent', () => {
  let component: EmployeeCreatePageComponent;
  let fixture: ComponentFixture<EmployeeCreatePageComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCreatePageComponent],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(EmployeeCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createEmployee', () => {
    const employee: CreateEmployee = {
      skills: [],
      languages: [],
      firstName: '',
      lastName: '',
      email: '',
      institution: '',
      diplomaProfession: '',
      department: '',
      role: '',
      password: '',
    };
    it('should dispatch createEmployeeAction', () => {
      component.createEmployee(employee);
      expect(store.dispatch).toHaveBeenCalledWith(createEmployeeAction(employee));
    });

    it('should call navigate', () => {
      component.createEmployee(employee);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });
});
