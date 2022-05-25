import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseControl } from 'src/app/core/classes/base-control/base-control.class';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaControlComponent extends BaseControl implements OnInit {
  @Input() public elementId = '';
  @Input() public label = '';
  @Input() public placeholder = '';

  public required: boolean | undefined;

  public override ngOnInit(): void {
    this.required = this.ngControl.control?.hasValidator(Validators.required);
  }
}
