import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { VirtualCvMenuItem } from '../../../../core/interfaces/virtual-cv-menu-item.interface';

@Component({
  selector: 'app-virtual-cv-menu',
  templateUrl: './virtual-cv-menu.component.html',
  styleUrls: ['./virtual-cv-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvMenuComponent {
  @Input() public menuItems: VirtualCvMenuItem[] = [];
  @Input() public employee: string;

  constructor(private router: Router) {}

  public redirectTo(address: string): void {
    this.router.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.INFO,
      this.employee,
      RoutingConstants.INFO,
      address,
    ]);
  }
}
