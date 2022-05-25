import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseControl } from '../../../classes/base-control/base-control.class';
@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextControlComponent extends BaseControl implements OnInit {
  @Input() public elementId = '';
  @Input() public label = '';
  @Input() public placeholder = '';

  public required: boolean | undefined;

  public override ngOnInit(): void {
    this.initErrors();
    this.required = this.ngControl.control?.hasValidator(Validators.required);
  }
}
