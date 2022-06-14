import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../../../classes/base-control/base-control.class';

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxControlComponent extends BaseControl {
  @Input() public label = '';
}
