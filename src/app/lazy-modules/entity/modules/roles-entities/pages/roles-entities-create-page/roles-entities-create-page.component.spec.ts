import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.reducers';

import { RolesEntitiesCreatePageComponent } from './roles-entities-create-page.component';

describe('RolesEntitiesCreatePageComponent', () => {
  let component: RolesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<RolesEntitiesCreatePageComponent>;

  let router: any;
  let spy: jasmine.Spy<any>;
  let store: MockStore<AppState>;

  const routerMock = {
    navigate: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolesEntitiesCreatePageComponent],
      imports: [CommonModule],
      providers: [{ provide: Router, useValue: routerMock }, provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(RolesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    spy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
