import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsEntitiesCreatePageComponent } from './specializations-entities-create-page.component';

describe('SpecializationsEntitiesCreatePageComponent', () => {
  let component: SpecializationsEntitiesCreatePageComponent;
  let fixture: ComponentFixture<SpecializationsEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationsEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
