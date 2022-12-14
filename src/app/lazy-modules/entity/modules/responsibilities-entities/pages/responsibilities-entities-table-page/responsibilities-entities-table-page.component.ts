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
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { deleteResponsibilityAction } from 'src/app/core/store/responsibilities/responsibilities.actions';
import { getResponsibilitiesSelector } from 'src/app/core/store/responsibilities/responsibilities.selectors';

@Component({
  selector: 'app-responsibilities-entities-table-page',
  templateUrl: './responsibilities-entities-table-page.component.html',
  styleUrls: ['./responsibilities-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsibilitiesEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.RESPONSIBILITIES',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public responsibilities: INameId[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.initData();
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createResponsibility(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.RESPONSIBILITIES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateResponsibility(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.RESPONSIBILITIES,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteResponsibility(id: string): void {
    this.store.dispatch(deleteResponsibilityAction({ id }));
  }

  private initData(): void {
    this.store
      .pipe(select(getResponsibilitiesSelector), takeUntil(this.destroy$))
      .subscribe(responsibilities => {
        this.responsibilities = responsibilities;
        this.cdr.markForCheck();
      });
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
            i18nKey: 'BREADCRUMB.RESPONSIBILITIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.RESPONSIBILITIES}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.ENTITY.RESPONSIBILITIES',
        },
      }),
    );
  }
}
