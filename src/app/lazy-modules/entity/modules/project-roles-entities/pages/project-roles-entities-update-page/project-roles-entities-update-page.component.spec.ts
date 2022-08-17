import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { projectRolesFeatureSelector } from '../../../../../../core/store/projects-roles/project-roles.selectors';
import { ProjectRolesEntitiesUpdatePageComponent } from './project-roles-entities-update-page.component';

describe('ProjectRolesEntitiesUpdatePageComponent', () => {
  let component: ProjectRolesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<ProjectRolesEntitiesUpdatePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  const ActivatedRouteMock = {
    params: { id: 'id' },
    paramMap: of(convertToParamMap({ id: 'id' })),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRolesEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(projectRolesFeatureSelector, {
      projectRoles: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitProjectRoles: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(ProjectRolesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
