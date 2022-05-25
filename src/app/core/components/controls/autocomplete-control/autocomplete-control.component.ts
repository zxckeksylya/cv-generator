import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../../../classes/base-control/base-control.class';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-control',
  templateUrl: './autocomplete-control.component.html',
  styleUrls: ['./autocomplete-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteControlComponent extends BaseControl implements OnInit {
  @Input() public elementId = '';
  @Input() public label = '';
  @Input() public placeholder = '';

  public required: boolean | undefined;

  public override ngOnInit(): void {
    this.required = this.ngControl.control?.hasValidator(Validators.required);
  }
}
