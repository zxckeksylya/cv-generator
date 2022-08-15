import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgControl } from '@angular/forms';
import { AppTranslateModule } from '../../../app-translate/app-translate.module';
import { GetControlErrorMessagePipeModule } from '../../../pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { CheckboxControlComponent } from './checkbox-control.component';

describe('CheckboxControlComponent', () => {
  let component: CheckboxControlComponent;
  let fixture: ComponentFixture<CheckboxControlComponent>;
  const control: any = {
    valueAccessor: {},
    control: {
      hasValidator: (): any => {},
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxControlComponent],
      providers: [{ provide: NgControl, useValue: control }],
      imports: [GetControlErrorMessagePipeModule, AppTranslateModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
