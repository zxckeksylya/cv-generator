import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const event = new Event('');
    component.buttonClick.pipe(first()).subscribe((value: any) => expect(value).toBe(event));
    component.onButtonClick(event);
  });
});
