import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesEntitiesTablePageComponent } from './categories-entities-table-page.component';

describe('CategoriesEntitiesTablePageComponent', () => {
  let component: CategoriesEntitiesTablePageComponent;
  let fixture: ComponentFixture<CategoriesEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
