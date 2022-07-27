import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvInfoPageComponent } from './virtual-cv-info-page.component';

describe('VirtualCvInfoPageComponent', () => {
  let component: VirtualCvInfoPageComponent;
  let fixture: ComponentFixture<VirtualCvInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
