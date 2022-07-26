import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvResumeFormComponent } from './virtual-cv-resume-form.component';

describe('VirtualCvResumeFormComponent', () => {
  let component: VirtualCvResumeFormComponent;
  let fixture: ComponentFixture<VirtualCvResumeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvResumeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvResumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
