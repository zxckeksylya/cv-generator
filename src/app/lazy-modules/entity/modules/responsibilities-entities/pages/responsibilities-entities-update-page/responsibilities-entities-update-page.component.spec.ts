import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { responsibilitiesFeatureSelector } from '../../../../../../core/store/responsibilities/responsibilities.selectors';
import { ResponsibilitiesEntitiesUpdatePageComponent } from './responsibilities-entities-update-page.component';

describe('ResponsibilitiesEntitiesUpdatePageComponent', () => {
  let component: ResponsibilitiesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<ResponsibilitiesEntitiesUpdatePageComponent>;

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
      declarations: [ResponsibilitiesEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(responsibilitiesFeatureSelector, {
      responsibilities: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitResponsibilities: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(ResponsibilitiesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
