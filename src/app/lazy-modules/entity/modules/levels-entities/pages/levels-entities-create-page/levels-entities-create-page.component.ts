import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { createLevelAction } from 'src/app/core/store/level/levels.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';

@Component({
  selector: 'app-levels-entities-create-page',
  templateUrl: './levels-entities-create-page.component.html',
  styleUrls: ['./levels-entities-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelsEntitiesCreatePageComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.initPageInfo();
  }

  public createLevel(name: Name): void {
    this.store.dispatch(createLevelAction(name));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY, RoutingConstants.LEVELS]);
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
            i18nKey: 'BREADCRUMB.LEVELS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LEVELS}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LEVELS}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.ENTITY.LEVELS',
        },
      }),
    );
  }
}
