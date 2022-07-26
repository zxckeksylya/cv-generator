import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvForeignLanguageFormComponent } from './virtual-cv-foreign-language-form.component';

describe('VirtualCvForeignLanguageFormComponent', () => {
  let component: VirtualCvForeignLanguageFormComponent;
  let fixture: ComponentFixture<VirtualCvForeignLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCvForeignLanguageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualCvForeignLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
