import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { projectsFeatureSelector } from 'src/app/core/store/projects/projects.selectors';
import { ProjectsListPageComponent } from './projects-list-page.component';

describe('ProjectsListPageComponent', () => {
  let component: ProjectsListPageComponent;
  let fixture: ComponentFixture<ProjectsListPageComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [ProjectsListPageComponent],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(projectsFeatureSelector, {
      projects: {
        id: {
          name: '',
          secondName: '',
          startDate: '',
          endDate: '',
          teamSize: 0,
          description: '',
          tasksPerformed: '',
          projectRoles: [],
          specializations: [],
          responsibilities: [],
          id: 'id',
        },
        idn: {
          name: '',
          secondName: '',
          startDate: '',
          endDate: '',
          teamSize: 0,
          description: '',
          tasksPerformed: '',
          projectRoles: [],
          specializations: [],
          responsibilities: [],
          id: 'idn',
        },
      },
      isInitProjects: true,
    });
    fixture = TestBed.createComponent(ProjectsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should createProject navigate', () => {
    component.createProject();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should updateProject navigate', () => {
    component.updateProject('id');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
