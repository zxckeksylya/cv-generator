import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { specializationsFeatureSelector } from '../../../../../../core/store/specializations/specializations.selectors';
import { SpecializationsEntitiesUpdatePageComponent } from './specializations-entities-update-page.component';

describe('SpecializationsEntitiesUpdatePageComponent', () => {
  let component: SpecializationsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<SpecializationsEntitiesUpdatePageComponent>;

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
      declarations: [SpecializationsEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(specializationsFeatureSelector, {
      specializations: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitSpecializations: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(SpecializationsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
