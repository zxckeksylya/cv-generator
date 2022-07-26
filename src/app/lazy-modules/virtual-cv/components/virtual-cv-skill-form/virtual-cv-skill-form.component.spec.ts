import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvSkillFormComponent } from './virtual-cv-skill-form.component';

describe('VirtualCvSkillFormComponent', () => {
  let component: VirtualCvSkillFormComponent;
  let fixture: ComponentFixture<VirtualCvSkillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvSkillFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvSkillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
