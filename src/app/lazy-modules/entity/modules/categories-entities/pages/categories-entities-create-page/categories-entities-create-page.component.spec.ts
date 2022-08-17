import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEntitiesCreatePageComponent } from './categories-entities-create-page.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

describe('CategoriesEntitiesCreatePageComponent', () => {
  let component: CategoriesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesCreatePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesEntitiesCreatePageComponent],
      imports: [CommonModule],
      providers: [{ provide: Router, useValue: routerMock }, provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CategoriesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
