import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvUpdatePageComponent } from './virtual-cv-update-page.component';

describe('VirtualCvUpdatePageComponent', () => {
  let component: VirtualCvUpdatePageComponent;
  let fixture: ComponentFixture<VirtualCvUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
