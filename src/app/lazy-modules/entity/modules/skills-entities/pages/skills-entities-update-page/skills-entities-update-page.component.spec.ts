import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducers';
import { skillsFeatureSelector } from '../../../../../../core/store/skill/skills.selectors';
import { SkillsEntitiesUpdatePageComponent } from './skills-entities-update-page.component';

describe('SkillsEntitiesUpdatePageComponent', () => {
  let component: SkillsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<SkillsEntitiesUpdatePageComponent>;

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
      declarations: [SkillsEntitiesUpdatePageComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: ActivatedRouteMock },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(skillsFeatureSelector, {
      skills: {
        id: {
          id: 'id',
          name: 'name',
          level: {
            id: 'id',
            name: 'name',
          },
          category: {
            id: 'id',
            name: 'name',
          },
          lastUsed: 0,
          experience: 0,
        },
      },
      isInitSkills: true,
    });
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture = TestBed.createComponent(SkillsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
