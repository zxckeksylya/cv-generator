import { ComponentFixture, TestBed } from '@angular/core/testing';

import { first } from 'rxjs';
import { DropdownComponent } from './dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [NzDropDownModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const event = new Event('');
    component.selectItem.pipe(first()).subscribe((value: any) => expect(value).toBe(event));
    component.clicked(event);
  });
});
