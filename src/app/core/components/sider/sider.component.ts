import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressCard, faGears } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
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
}
