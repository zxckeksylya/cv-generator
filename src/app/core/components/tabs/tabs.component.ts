import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TabItem } from '../../interfaces/tab-item.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() public tabs: TabItem[] = [];
}
