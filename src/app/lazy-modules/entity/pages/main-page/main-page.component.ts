import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { EntityMenuItem } from '../../../../core/interfaces/entity-menu-item.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  public menuItems: EntityMenuItem[] = [
    {
      i18nKey: 'ENTITY.MENU.ROLES',
      path: RoutingConstants.ROLES,
    },
    {
      i18nKey: 'ENTITY.MENU.CATEGORIES',
      path: RoutingConstants.CATEGORIES,
    },
    {
      i18nKey: 'ENTITY.MENU.PROJECT_ROLES',
      path: RoutingConstants.PROJECT_ROLES,
    },
    {
      i18nKey: 'ENTITY.MENU.SPECIALIZATION',
      path: RoutingConstants.SPECIALIZATION,
    },
    {
      i18nKey: 'ENTITY.MENU.SKILLS',
      path: RoutingConstants.SKILLS,
    },
    {
      i18nKey: 'ENTITY.MENU.LEVELS',
      path: RoutingConstants.LEVELS,
    },
    {
      i18nKey: 'ENTITY.MENU.RESPONSIBILITIES',
      path: RoutingConstants.RESPONSIBILITIES,
    },
    {
      i18nKey: 'ENTITY.MENU.LANGUAGES',
      path: RoutingConstants.LANGUAGES,
    },
  ];

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initPageInfo();
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
            path: `${RoutingConstants.ENTITY}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.ENTITIES',
        },
      }),
    );
  }
}
