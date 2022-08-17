import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

import { Router } from '@angular/router';
import { CreateProject } from '../../../../core/interfaces/project.interface';
import { createProjectAction } from '../../../../core/store/projects/projects.actions';
import { ProjectCreatePageComponent } from './project-create-page.component';

describe('ProjectCreatePageComponent', () => {
  let component: ProjectCreatePageComponent;
  let fixture: ComponentFixture<ProjectCreatePageComponent>;
  let store: MockStore<AppState>;
  let router: any;
  let spy: jasmine.Spy<any>;

  const routerMock = {
    navigate: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCreatePageComponent],
      providers: [provideMockStore(), { provide: Router, useValue: routerMock }],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(ProjectCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createProject', () => {
    const project: CreateProject = {
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
    };
    it('should dispatch createProjectAction', () => {
      component.createProject(project);
      expect(store.dispatch).toHaveBeenCalledWith(createProjectAction(project));
    });

    it('should call navigate', () => {
      component.createProject(project);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });
});
