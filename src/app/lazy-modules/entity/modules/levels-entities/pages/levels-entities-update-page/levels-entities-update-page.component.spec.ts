import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { levelsFeatureSelector } from '../../../../../../core/store/level/levels.selectors';
import { LevelsEntitiesUpdatePageComponent } from './levels-entities-update-page.component';

describe('LevelsEntitiesUpdatePageComponent', () => {
  let component: LevelsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<LevelsEntitiesUpdatePageComponent>;

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
      declarations: [LevelsEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(levelsFeatureSelector, {
      levels: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitLevels: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(LevelsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
