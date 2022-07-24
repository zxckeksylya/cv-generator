import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitiesEntitiesTablePageComponent } from './responsibilities-entities-table-page.component';

describe('ResponsibilitiesEntitiesTablePageComponent', () => {
  let component: ResponsibilitiesEntitiesTablePageComponent;
  let fixture: ComponentFixture<ResponsibilitiesEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilitiesEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilitiesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
