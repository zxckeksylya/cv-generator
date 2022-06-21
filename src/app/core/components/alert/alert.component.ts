import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

type AlertType = 'success' | 'info' | 'warning' | 'error';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() public banner = false;
  @Input() public closeable = false;
  @Input() public type: AlertType = 'info';
  @Input() public descriptions: string[] = [];
  @Input() public message = '';
}
