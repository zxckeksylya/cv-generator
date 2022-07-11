import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseSelectControl } from '../../../classes/base-control/base-select-control.class';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent extends BaseSelectControl {}
