import { Directive, Input } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control.class';

@Directive()
export class BaseSelectControl extends BaseInputControl {
  @Input() public dataSource: any[] = [];
  @Input() public optionLabelField: string;
  @Input() public optionValueField: string;

  public compareFun = (o1: any | string, o2: any): boolean => {
    if (o1 && o2) {
      return typeof o1 === 'string'
        ? o1 === o2[this.optionLabelField]
        : o1[this.optionValueField] === o2[this.optionValueField];
    } else {
      return false;
    }
  };
}
