import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvTablePageComponent } from './virtual-cv-table-page.component';

describe('VirtualCvTablePageComponent', () => {
  let component: VirtualCvTablePageComponent;
  let fixture: ComponentFixture<VirtualCvTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
