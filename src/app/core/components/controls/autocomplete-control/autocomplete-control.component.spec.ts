import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgControl } from '@angular/forms';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { GetControlErrorMessagePipeModule } from 'src/app/core/pipes/get-control-error-message-pipe/get-control-error-message-pipe.module';
import { AutocompleteControlComponent } from './autocomplete-control.component';

describe('AutocompleteControlComponent', () => {
  let component: AutocompleteControlComponent;
  let fixture: ComponentFixture<AutocompleteControlComponent>;
  const control: any = {
    valueAccessor: {},
    control: {
      hasValidator: (): any => {},
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteControlComponent],
      providers: [{ provide: NgControl, useValue: control }],
      imports: [GetControlErrorMessagePipeModule, AppTranslateModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
