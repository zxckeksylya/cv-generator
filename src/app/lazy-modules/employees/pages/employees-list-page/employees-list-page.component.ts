import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { GetEmployee } from 'src/app/core/interfaces/employee.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { getEmployeesSelector } from '../../../../core/store/employess/employees.selectors';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListPageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'EMPLOYEES.FIRST_NAME',
    },
    {
      i18nKey: 'EMPLOYEES.LAST_NAME',
    },
    {
      i18nKey: 'EMPLOYEES.EMAIL',
    },
    {
      i18nKey: 'EMPLOYEES.DEPARTMENT',
    },
  ];

  public employees: GetEmployee[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(getEmployeesSelector), takeUntil(this.destroy$))
      .subscribe((employees) => {
        this.employees = employees;
        this.cdr.markForCheck();
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createEmployee(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateEmployee(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.INFO,
      id,
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
            i18nKey: 'BREADCRUMB.EMPLOYEES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.EMPLOYEES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.EMPLOYEES',
        },
      }),
    );
  }
}
