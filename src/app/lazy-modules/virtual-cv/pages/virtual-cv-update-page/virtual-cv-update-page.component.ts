import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { VirtualCV } from 'src/app/core/interfaces/virtual-cv.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { VirtualCVData } from '../../../../core/interfaces/virtual-cv.interface';
import { updateVirtualCVAction } from '../../../../core/store/virtual-cv/virtual-cv.actions';
import { getVirtualCvByIdSelector } from '../../../../core/store/virtual-cv/virtual-cv.selectors';

@Component({
  selector: 'app-virtual-cv-update-page',
  templateUrl: './virtual-cv-update-page.component.html',
  styleUrls: ['./virtual-cv-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvUpdatePageComponent implements OnInit, OnDestroy {
  public virtualCV: VirtualCV;
  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => params.getAll('id')),
        take(1),
        switchMap(id => this.store.pipe(select(state => getVirtualCvByIdSelector(state, { id })))),
      )
      .subscribe(item => {
        this.virtualCV = item;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateVirtualCV(virtualCVData: VirtualCVData): void {
    this.store.dispatch(
      updateVirtualCVAction({ virtualCV: { ...this.virtualCV, data: virtualCVData } }),
    );
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
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.VIRTUAL_CVS}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.VIRTUAL_CVS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.VIRTUAL_CVS',
        },
      }),
    );
  }
}
