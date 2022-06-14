import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setNewBreadcrumb } from '../../../../core/store/breadcrumb/breadcrumb.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  public ngOnInit(): void {
    this.store.dispatch(
      setNewBreadcrumb({
        arrayOfBreadcrumbs: [
          { name: 'Home', path: `${RoutingConstants.MAIN}`, description: 'Main', section: 'Home' },
        ],
      }),
    );
  }
}
