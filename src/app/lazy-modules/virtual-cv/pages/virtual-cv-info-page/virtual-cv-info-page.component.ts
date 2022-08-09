import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { getVirtualCvByIdSelector } from 'src/app/core/store/virtual-cv/virtual-cv.selectors';
import { VirtualCV } from '../../../../core/interfaces/virtual-cv.interface';
import { getActiveEmployeeSelector } from '../../../../core/store/virtual-cv/virtual-cv.selectors';

@Component({
  selector: 'app-virtual-cv-info-page',
  templateUrl: './virtual-cv-info-page.component.html',
  styleUrls: ['./virtual-cv-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvInfoPageComponent implements OnInit, OnDestroy {
  public virtualCV: VirtualCV;
  private employeeID: string;
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
        switchMap(id => this.store.pipe(select(state => getVirtualCvByIdSelector(state, { id })))),
      )
      .subscribe(item => {
        this.virtualCV = item;
        this.cdr.markForCheck();
      });
    this.initData();
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  public updateVirtualCV(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.EMPLOYEES,
      RoutingConstants.INFO,
      this.employeeID,
      RoutingConstants.UPDATE,
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
          {
            i18nKey: 'BREADCRUMB.INFO',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.VIRTUAL_CVS}/${RoutingConstants.INFO}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.VIRTUAL_CVS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.INFO.VIRTUAL_CVS',
        },
      }),
    );
  }
  private initData(): void {
    this.store.pipe(select(getActiveEmployeeSelector), takeUntil(this.destroy$)).subscribe(item => {
      this.employeeID = item;
    });
  }
}
