import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { EntityMenuItem } from '../../../../core/interfaces/entity-menu-item.interface';

@Component({
  selector: 'app-entity-menu',
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityMenuComponent {
  @Input() public menuItems: EntityMenuItem[] = [];

  constructor(private router: Router) {}

  public redirectTo(address: RoutingConstants): void {
    this.router.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY, address]);
  }
}
