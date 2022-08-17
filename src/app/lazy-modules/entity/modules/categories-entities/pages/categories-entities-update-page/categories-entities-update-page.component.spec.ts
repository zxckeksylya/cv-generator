import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { categoriesFeatureSelector } from 'src/app/core/store/category/categories.selectors';

import { CategoriesEntitiesUpdatePageComponent } from './categories-entities-update-page.component';

describe('CategoriesEntitiesUpdatePageComponent', () => {
  let component: CategoriesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesUpdatePageComponent>;

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
      declarations: [CategoriesEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(categoriesFeatureSelector, {
      categories: {
        id: {
          id: 'id',
          name: 'name',
        },
      },
      isInitCategories: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(CategoriesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
