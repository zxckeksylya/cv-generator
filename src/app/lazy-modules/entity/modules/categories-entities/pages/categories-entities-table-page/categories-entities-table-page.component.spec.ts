import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppTranslateModule } from '../../../../../../core/app-translate/app-translate.module';
import { CategoriesEntitiesTablePageComponent } from './categories-entities-table-page.component';

describe('CategoriesEntitiesTablePageComponent', () => {
  let component: CategoriesEntitiesTablePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesTablePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesEntitiesTablePageComponent],
      imports: [CommonModule, AppTranslateModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerMock }, provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CategoriesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
