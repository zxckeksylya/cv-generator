import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvEducationFormComponent } from './virtual-cv-education-form.component';

describe('VirtualCvEducationFormComponent', () => {
  let component: VirtualCvEducationFormComponent;
  let fixture: ComponentFixture<VirtualCvEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvEducationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
