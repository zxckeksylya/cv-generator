import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsEntitiesUpdatePageComponent } from './specializations-entities-update-page.component';

describe('SpecializationsEntitiesUpdatePageComponent', () => {
  let component: SpecializationsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<SpecializationsEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
