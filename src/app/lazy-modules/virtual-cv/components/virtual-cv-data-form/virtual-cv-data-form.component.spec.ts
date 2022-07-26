import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvDataFormComponent } from './virtual-cv-data-form.component';

describe('VirtualCvDataFormComponent', () => {
  let component: VirtualCvDataFormComponent;
  let fixture: ComponentFixture<VirtualCvDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
