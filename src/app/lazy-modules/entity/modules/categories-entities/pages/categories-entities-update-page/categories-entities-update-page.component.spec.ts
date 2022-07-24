import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEntitiesUpdatePageComponent } from './categories-entities-update-page.component';

describe('CategoriesEntitiesUpdatePageComponent', () => {
  let component: CategoriesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
