import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvCreatePageComponent } from './virtual-cv-create-page.component';

describe('VirtualCvCreatePageComponent', () => {
  let component: VirtualCvCreatePageComponent;
  let fixture: ComponentFixture<VirtualCvCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
