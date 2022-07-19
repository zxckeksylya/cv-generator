import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { GetEmployee } from 'src/app/core/interfaces/employee.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { UpdateEmployee } from '../../../../core/interfaces/employee.interface';
import { updateEmployeeAction } from '../../../../core/store/employess/employees.actions';
import { getEmployeeByIdSelector } from '../../../../core/store/employess/employees.selectors';

@Component({
  selector: 'app-employee-info-page',
  templateUrl: './employee-info-page.component.html',
  styleUrls: ['./employee-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeInfoPageComponent implements OnInit, OnDestroy {
  public updatedEmployee: GetEmployee;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => params.getAll('id')),
        take(1),
        switchMap(id => this.store.pipe(select(state => getEmployeeByIdSelector(state, { id })))),
      )
      .subscribe(employee => {
        this.updatedEmployee = employee;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateEmployee(employee: UpdateEmployee): void {
    this.store.dispatch(updateEmployeeAction({ ...employee, id: this.updatedEmployee.id }));
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
            i18nKey: 'BREADCRUMB.PROJECTS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
          },
          {
            i18nKey: 'BREADCRUMB.INFO',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}/${RoutingConstants.INFO}`,
          },
        ],
      }),
    );

    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.EMPLOYEES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.INFO.EMPLOYEES',
        },
      }),
    );
  }
}
