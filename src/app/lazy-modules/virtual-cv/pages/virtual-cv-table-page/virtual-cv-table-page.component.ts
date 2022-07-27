import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { AppState } from '../../../../core/store/app.reducers';
import { select, Store } from '@ngrx/store';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { VirtualCV } from '../../../../core/interfaces/virtual-cv.interface';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { Subject, takeUntil } from 'rxjs';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import { getVirtualCVsSelector } from '../../../../core/store/virtual-cv/virtual-cv.selectors';

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
      RoutingConstants.VIRTUAL_CVS,
      RoutingConstants.CREATE,
    ]);
  }

  public infoVirtualCV(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.VIRTUAL_CVS,
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
            i18nKey: 'BREADCRUMB.VIRTUAL_CVS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.VIRTUAL_CVS}`,
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
      .pipe(select(getVirtualCVsSelector), takeUntil(this.destroy$))
      .subscribe(virtualCVs => {
        this.virtualCVs = virtualCVs;
        this.cdr.markForCheck();
      });
  }
}
