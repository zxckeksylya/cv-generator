import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { createRoleAction } from 'src/app/core/store/role/roles.actions';

@Component({
  selector: 'app-roles-entities-create-page',
  templateUrl: './roles-entities-create-page.component.html',
  styleUrls: ['./roles-entities-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesEntitiesCreatePageComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.initPageInfo();
  }

  public createRole(name: Name): void {
    this.store.dispatch(createRoleAction(name));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY, RoutingConstants.ROLES]);
  }

  private initPageInfo(): void {
    this.store.dispatch(
      setBreadcrumbsAction({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.MAIN',
            path: `${RoutingConstants.MAIN}`,
          },
          {
            i18nKey: 'BREADCRUMB.ENTITIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}`,
          },
          {
            i18nKey: 'BREADCRUMB.ROLES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.ROLES}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.ROLES}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.ENTITY.ROLE',
        },
      }),
    );
  }
}
