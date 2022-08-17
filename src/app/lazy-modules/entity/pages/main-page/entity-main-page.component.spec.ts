import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EntityMainPageComponent } from './entity-main-page.component';

describe('MainPageComponent', () => {
  let component: EntityMainPageComponent;
  let fixture: ComponentFixture<EntityMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityMainPageComponent],
      providers: [provideMockStore()],
    }).compileComponents();
    TestBed.inject(MockStore);
    fixture = TestBed.createComponent(EntityMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
