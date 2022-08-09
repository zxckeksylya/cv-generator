import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { VirtualCvMenuItem } from '../../../../core/interfaces/virtual-cv-menu-item.interface';
import { VirtualCV } from '../../../../core/interfaces/virtual-cv.interface';
import { AppState } from '../../../../core/store/app.reducers';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import {
  getActiveEmployeeSelector,
  getVirtualCVsByEmployeeIdSelector,
} from '../../../../core/store/virtual-cv/virtual-cv.selectors';

@Component({
  selector: 'app-virtual-cv-table-page',
  templateUrl: './virtual-cv-table-page.component.html',
  styleUrls: ['./virtual-cv-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'VIRTUAL_CVS.USER_NAME',
    },
  ];

  public virtualCVs: VirtualCV[] = [];

  public menuItems: VirtualCvMenuItem[] = [];

  public employeeID: string;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private route: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.initPageInfo();
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createVirtualCV(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.INFO,
      this.employeeID,
      RoutingConstants.CREATE,
    ]);
  }

  public infoVirtualCV(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.INFO,
      this.employeeID,
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
          {
            i18nKey: 'BREADCRUMB.INFO',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}/${RoutingConstants.INFO}`,
          },
          {
            i18nKey: 'BREADCRUMB.INFO',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}/${RoutingConstants.INFO}/${this.employeeID}`,
          },
          {
            i18nKey: 'BREADCRUMB.VIRTUAL_CVS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}/${RoutingConstants.INFO}/${this.employeeID}/${RoutingConstants.VIRTUAL_CVS}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.VIRTUAL_CVS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.VIRTUAL_CVS',
        },
      }),
    );
  }

  private initData(): void {
    this.store
      .pipe(
        select(getActiveEmployeeSelector),
        takeUntil(this.destroy$),
        switchMap(id =>
          this.store.pipe(
            select(state => getVirtualCVsByEmployeeIdSelector(state, { id })),
            map(virtualCvs => ({ virtualCvs, id })),
          ),
        ),
      )
      .subscribe(item => {
        this.virtualCVs = item.virtualCvs;
        this.menuItems = item.virtualCvs.map(cv => ({
          path: cv.id,
          name: cv.data.general.name,
        }));
        this.employeeID = item.id;
        this.cdr.markForCheck();
      });
  }
}
