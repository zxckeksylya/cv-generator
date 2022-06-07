import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseInputControl } from '../../../classes/base-control/base-input-control.class';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberControlComponent extends BaseInputControl {
  @Input() public min: number;
  @Input() public max: number;
  @Input() public step: number;
}
