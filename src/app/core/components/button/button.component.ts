import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonType } from 'ng-zorro-antd/button';

type BehaviorType = 'button' | 'reset' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public classNames = '';
  @Input() public disabled = false;
  @Input() public type: NzButtonType = 'default';
  @Input() public behaviorType: BehaviorType = 'button';

  @Output() public buttonClick = new EventEmitter<Event>();

  public onButtonClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
