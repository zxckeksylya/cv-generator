import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Subject, switchMap, take, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { CV } from 'src/app/core/interfaces/cv.interface';
import { EmployeeForm, GetEmployee } from 'src/app/core/interfaces/employee.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { getEmployeeByIdSelector } from 'src/app/core/store/employess/employees.selectors';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { getCVsByEmployeeIdSelector } from '../../../../core/store/cv/cv.selectors';
import { updateEmployeeAction } from '../../../../core/store/employess/employees.actions';
import { CollapseItem } from '../../../../core/interfaces/collapse-item.interface';

@Component({
  selector: 'app-employee-info-page',
  templateUrl: './employee-info-page.component.html',
  styleUrls: ['./employee-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeInfoPageComponent implements OnInit, OnDestroy {
  public updatedEmployee: GetEmployee;

  public cvs: CV[];

  public cvCollapseItems: CollapseItem[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => params.getAll('id')),
        take(1),
        switchMap(id =>
          this.store.pipe(
            select(state => getEmployeeByIdSelector(state, { id })),
            takeUntil(this.destroy$),
            switchMap(employee =>
              this.store.pipe(
                select(state => getCVsByEmployeeIdSelector(state, { id: employee.id })),
                takeUntil(this.destroy$),
                map(cvs => ({ employee, cvs })),
              ),
            ),
          ),
        ),
      )
      .subscribe(item => {
        this.cvs = item.cvs;
        this.updatedEmployee = item.employee;
        this.cvCollapseItems = this.cvs.map(cv => ({
          name: cv.name,
          disabled: false,
          active: false,
        }));
        this.cdr.markForCheck();
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateEmployee(employee: EmployeeForm): void {
    this.store.dispatch(updateEmployeeAction({ ...employee, id: this.updatedEmployee.id }));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.EMPLOYEES]);
  }

  public addCv(): void {
    this.cvCollapseItems = [
      ...this.cvCollapseItems,
      { name: 'new cv', active: false, disabled: false },
    ];
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
