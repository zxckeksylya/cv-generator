import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control.class';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteControlComponent extends BaseInputControl {
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
