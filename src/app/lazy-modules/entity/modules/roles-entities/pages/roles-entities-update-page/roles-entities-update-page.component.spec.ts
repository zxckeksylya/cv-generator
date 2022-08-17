import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { rolesFeatureSelector } from 'src/app/core/store/role/roles.selectors';
import { RolesEntitiesUpdatePageComponent } from './roles-entities-update-page.component';

describe('RolesEntitiesUpdatePageComponent', () => {
  let component: RolesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<RolesEntitiesUpdatePageComponent>;

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
      declarations: [RolesEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(rolesFeatureSelector, {
      roles: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitRoles: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(RolesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
