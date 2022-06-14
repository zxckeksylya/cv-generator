import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseSelectControl } from '../../../classes/base-control/base-select-control.class';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteControlComponent extends BaseSelectControl {}
