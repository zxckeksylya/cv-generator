import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaControlComponent extends BaseInputControl {}
