import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { createEmployeeAction } from 'src/app/core/store/employess/employees.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { EmployeeForm } from '../../../../core/interfaces/employee.interface';

@Component({
  selector: 'app-employee-create-page',
  templateUrl: './employee-create-page.component.html',
  styleUrls: ['./employee-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCreatePageComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.initPageInfo();
  }

  public createEmployee(employee: EmployeeForm): void {
    this.store.dispatch(createEmployeeAction({ password: 'string', ...employee }));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.EMPLOYEES]);
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
            i18nKey: 'BREADCRUMB.EMPLOYEES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.EMPLOYEES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.EMPLOYEES',
        },
      }),
    );
  }
}
