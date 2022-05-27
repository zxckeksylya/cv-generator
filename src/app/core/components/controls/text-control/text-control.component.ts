import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseInputControl } from 'src/app/core/classes/base-control/base-input-control';
@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextControlComponent extends BaseInputControl {}
