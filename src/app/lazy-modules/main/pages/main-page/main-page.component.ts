import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import { AppState } from '../../../../core/store/app.reducers';
import { initEmployeesStoreAction } from '../../../../core/store/employess/employees.actions';
import { initProjectsStoreAction } from '../../../../core/store/projects/projects.actions';
import { initProjectRolesStoreAction } from '../../../../core/store/projects-roles/project-roles.actions';
import { initSpecializationsStoreAction } from '../../../../core/store/specializations/specializations.actions';
import { initResponsibilitiesStoreAction } from '../../../../core/store/responsibilities/responsibilities.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  public ngOnInit(): void {
    this.initData();
    this.initPageInfo();
  }

  private initData(): void {
    this.store.dispatch(initEmployeesStoreAction());
    this.store.dispatch(initProjectsStoreAction());
    this.store.dispatch(initProjectRolesStoreAction());
    this.store.dispatch(initSpecializationsStoreAction());
    this.store.dispatch(initResponsibilitiesStoreAction());
  }

  private initPageInfo(): void {
    this.store.dispatch(
      setBreadcrumbsAction({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.MAIN',
            path: `${RoutingConstants.MAIN}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.MAIN',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.MAIN',
        },
      }),
    );
  }
}
