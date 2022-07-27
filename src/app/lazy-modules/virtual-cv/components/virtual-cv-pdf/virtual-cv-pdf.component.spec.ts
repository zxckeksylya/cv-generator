import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvPdfComponent } from './virtual-cv-pdf.component';

describe('VirtualCvPdfComponent', () => {
  let component: VirtualCvPdfComponent;
  let fixture: ComponentFixture<VirtualCvPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
