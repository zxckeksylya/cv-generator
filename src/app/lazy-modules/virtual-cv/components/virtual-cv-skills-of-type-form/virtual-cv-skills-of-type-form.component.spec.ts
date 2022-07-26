import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvSkillsOfTypeFormComponent } from './virtual-cv-skills-of-type-form.component';

describe('VirtualCvSkillsOfTypeFormComponent', () => {
  let component: VirtualCvSkillsOfTypeFormComponent;
  let fixture: ComponentFixture<VirtualCvSkillsOfTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvSkillsOfTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvSkillsOfTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
