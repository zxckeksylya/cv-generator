import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { createSpecializationAction } from 'src/app/core/store/specializations/specializations.actions';

@Component({
  selector: 'app-specializations-entities-create-page',
  templateUrl: './specializations-entities-create-page.component.html',
  styleUrls: ['./specializations-entities-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecializationsEntitiesCreatePageComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.initPageInfo();
  }

  public createSpecialization(name: Name): void {
    this.store.dispatch(createSpecializationAction(name));
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SPECIALIZATION,
    ]);
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
            i18nKey: 'BREADCRUMB.SPECIALIZATION',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SPECIALIZATION}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SPECIALIZATION}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.ENTITY.SPECIALIZATION',
        },
      }),
    );
  }
}
