import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEntitiesCreatePageComponent } from './categories-entities-create-page.component';

describe('CategoriesEntitiesCreatePageComponent', () => {
  let component: CategoriesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
