import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvGeneralFormComponent } from './virtual-cv-general-form.component';

describe('VirtualCvGeneralFormComponent', () => {
  let component: VirtualCvGeneralFormComponent;
  let fixture: ComponentFixture<VirtualCvGeneralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvGeneralFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
