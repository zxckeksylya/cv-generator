import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderComponent {
  public faAddressCard = faAddressCard;
  public faDatabase = faDatabase;

  constructor(private router: Router) {}

  public redirectToEmployees(): void {
    this.router.navigate(['employees']);
  }

  public redirectToProjects(): void {
    this.router.navigate(['projects']);
  }
}
