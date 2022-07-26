import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvNameFormComponent } from './virtual-cv-name-form.component';

describe('VirtualCvNameFormComponent', () => {
  let component: VirtualCvNameFormComponent;
  let fixture: ComponentFixture<VirtualCvNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
