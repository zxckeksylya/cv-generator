import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvMenuComponent } from './virtual-cv-menu.component';

describe('VirtualCvMenuComponent', () => {
  let component: VirtualCvMenuComponent;
  let fixture: ComponentFixture<VirtualCvMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
