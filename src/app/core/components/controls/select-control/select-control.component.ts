import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseSelectControl } from '../../../classes/base-control/base-select-control.class';

type Mode = 'multiple' | 'tags' | 'default';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent extends BaseSelectControl {
  @Input() public mode: Mode = 'default';
}
