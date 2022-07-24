import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { deleteSpecializationAction } from 'src/app/core/store/specializations/specializations.actions';
import { getSpecializationsSelector } from 'src/app/core/store/specializations/specializations.selectors';

@Component({
  selector: 'app-specializations-entities-table-page',
  templateUrl: './specializations-entities-table-page.component.html',
  styleUrls: ['./specializations-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecializationsEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.SPECIALIZATION',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public specializations: INameId[] = [];

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

  public createSpecialization(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SPECIALIZATION,
      RoutingConstants.CREATE,
    ]);
  }

  public updateSpecialization(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SPECIALIZATION,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteSpecialization(id: string): void {
    this.store.dispatch(deleteSpecializationAction({ id }));
  }

  private initData(): void {
    this.store
      .pipe(select(getSpecializationsSelector), takeUntil(this.destroy$))
      .subscribe(specializations => {
        this.specializations = specializations;
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
            i18nKey: 'BREADCRUMB.SPECIALIZATIONS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SPECIALIZATION}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.ENTITY.SPECIALIZATIONS',
        },
      }),
    );
  }
}
