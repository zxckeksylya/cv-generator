import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';

import { languagesFeatureSelector } from '../../../../../../core/store/language/language.selectors';
import { LanguagesEntitiesUpdatePageComponent } from './languages-entities-update-page.component';

describe('LanguagesEntitiesUpdatePageComponent', () => {
  let component: LanguagesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<LanguagesEntitiesUpdatePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  const ActivatedRouteMock = {
    params: { id: 'id' },
    paramMap: of(convertToParamMap({ name: 'name' })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(languagesFeatureSelector, {
      languages: {
        id: {
          id: 'id',
          name: 'name',
          professionalReadingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalSpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalWritingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayReadingLevel: {
            id: 'id',
            name: 'name',
          },
          everydaySpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayWritingLevel: {
            id: 'id',
            name: 'name',
          },
        },
      },
      isInitLanguages: true,
      lastCreatedLanguages: {
        id: {
          id: 'id',
          name: 'name',
          professionalReadingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalSpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          professionalWritingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayReadingLevel: {
            id: 'id',
            name: 'name',
          },
          everydaySpeakingLevel: {
            id: 'id',
            name: 'name',
          },
          everydayWritingLevel: {
            id: 'id',
            name: 'name',
          },
        },
      },
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(LanguagesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
