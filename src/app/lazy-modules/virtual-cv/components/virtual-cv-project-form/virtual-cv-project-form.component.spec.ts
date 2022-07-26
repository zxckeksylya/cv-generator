import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvProjectFormComponent } from './virtual-cv-project-form.component';

describe('VirtualCvProjectFormComponent', () => {
  let component: VirtualCvProjectFormComponent;
  let fixture: ComponentFixture<VirtualCvProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvProjectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
