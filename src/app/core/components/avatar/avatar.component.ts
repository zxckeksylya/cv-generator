import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type Shape = 'circle' | 'square';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() public src = '';
  @Input() public size = 32;
  @Input() public shape: Shape = 'circle';
}
