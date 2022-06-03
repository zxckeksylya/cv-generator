import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control.class';

type ModeType = 'date' | 'week' | 'month' | 'year';

@Component({
  selector: 'app-date-picker-control',
  templateUrl: './date-picker-control.component.html',
  styleUrls: [
    './date-picker-control.component.scss',
    '../../../../../assets/styles/base-control.styles.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerControlComponent extends BaseInputControl {
  @Input() public mode: ModeType = 'date';
}
