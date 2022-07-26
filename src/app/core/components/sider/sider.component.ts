import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAddressCard,
  faDatabase,
  faGears,
  faPersonDigging,
} from '@fortawesome/free-solid-svg-icons';
import { RoutingConstants } from '../../constants/routing.constants';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderComponent {
  public readonly faAddressCard = faAddressCard;
  public readonly faDatabase = faDatabase;
  public readonly faGears = faGears;
  public readonly faPersonDigging = faPersonDigging;

  constructor(private router: Router) {}

  public redirectToEmployees(): void {
    this.router.navigate([RoutingConstants.MAIN, RoutingConstants.EMPLOYEES]);
  }

  public redirectToProjects(): void {
    this.router.navigate([RoutingConstants.MAIN, RoutingConstants.PROJECTS]);
  }
  public redirectToEntities(): void {
    this.router.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY]);
  }
  public redirectToVirtualCVs(): void {
    this.router.navigate([RoutingConstants.MAIN, RoutingConstants.VIRTUAL_CVS]);
  }
}
