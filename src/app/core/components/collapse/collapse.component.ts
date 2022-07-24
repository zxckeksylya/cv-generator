import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { CollapseItem } from '../../interfaces/collapse-item.interface';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent {
  @Input() public collapseItems: CollapseItem[] = [];
  @Input() public collapseRef: TemplateRef<any>;
}
