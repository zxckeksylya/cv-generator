import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteControlComponent extends BaseInputControl {}
