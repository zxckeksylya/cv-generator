import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseControl } from '../../../classes/base-control/base-control.class';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent extends BaseControl {
  @Input() public label = '';
  @Input() public dataSource: any[] = [];

  @Input() public optionValueField: string;
  @Input() public optionLabelField: string;

  public compareFun = (o1: any | string, o2: any): boolean => {
    if (o1) {
      return typeof o1 === 'string'
        ? o1 === o2[this.optionLabelField]
        : o1[this.optionValueField] === o2[this.optionValueField];
    } else {
      return false;
    }
  };
}
