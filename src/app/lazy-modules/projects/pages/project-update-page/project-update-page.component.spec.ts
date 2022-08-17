import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

import { of } from 'rxjs';
import { UpdateProject } from 'src/app/core/interfaces/project.interface';
import { projectsFeatureSelector } from 'src/app/core/store/projects/projects.selectors';
import { updateProjectAction } from '../../../../core/store/projects/projects.actions';
import { ProjectUpdatePageComponent } from './project-update-page.component';

describe('ProjectUpdatePageComponent', () => {
  let component: ProjectUpdatePageComponent;
  let fixture: ComponentFixture<ProjectUpdatePageComponent>;
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
      declarations: [ProjectUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
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
      },
      isInitProjects: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(ProjectUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(MockStore)?.resetSelectors();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateProject', () => {
    const project: UpdateProject = {
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
    };
    it('should dispatch createProjectAction', () => {
      component.updateProject(project);
      expect(store.dispatch).toHaveBeenCalledWith(
        updateProjectAction({ ...project, id: component.updatedProject.id }),
      );
    });

    it('should call navigate', () => {
      component.updateProject(project);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });
});
