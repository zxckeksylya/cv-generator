import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { AppState } from 'src/app/core/store/app.reducers';

import { ProjectRolesEntitiesTablePageComponent } from './project-roles-entities-table-page.component';

describe('ProjectRolesEntitiesTablePageComponent', () => {
  let component: ProjectRolesEntitiesTablePageComponent;
  let fixture: ComponentFixture<ProjectRolesEntitiesTablePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRolesEntitiesTablePageComponent],
      imports: [CommonModule, AppTranslateModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerMock }, provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProjectRolesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
