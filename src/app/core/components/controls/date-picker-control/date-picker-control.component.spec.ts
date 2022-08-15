import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';

import { DatePickerControlComponent } from './date-picker-control.component';

describe('DatePickerControlComponent', () => {
  let component: DatePickerControlComponent;
  let fixture: ComponentFixture<DatePickerControlComponent>;
  const control: any = {
    valueAccessor: {},
    control: {
      hasValidator: (): any => {},
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePickerControlComponent],
      providers: [{ provide: NgControl, useValue: control }],
      imports: [GetControlErrorMessagePipeModule, AppTranslateModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
