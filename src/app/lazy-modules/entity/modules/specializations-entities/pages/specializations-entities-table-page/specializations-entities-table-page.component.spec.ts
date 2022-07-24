import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsEntitiesTablePageComponent } from './specializations-entities-table-page.component';

describe('SpecializationsEntitiesTablePageComponent', () => {
  let component: SpecializationsEntitiesTablePageComponent;
  let fixture: ComponentFixture<SpecializationsEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationsEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
