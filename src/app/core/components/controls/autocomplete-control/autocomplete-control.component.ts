import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control.class';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: [
    './autocomplete-control.component.scss',
    '../../../../../assets/styles/base-control.styles.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteControlComponent extends BaseInputControl {
  @Input() public dataSource = [];
}
