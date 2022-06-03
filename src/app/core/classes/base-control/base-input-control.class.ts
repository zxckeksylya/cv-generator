import { BaseControl } from './base-control.class';
import { Directive, Input } from '@angular/core';

@Directive()
export class BaseInputControl extends BaseControl {
  @Input() public label = '';
  @Input() public placeholder = '';
}
