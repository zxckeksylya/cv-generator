import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { RoutingConstants } from '../../../../../../core/constants/routing.constants';
import { AppState } from '../../../../../../core/store/app.reducers';
import { deleteLanguageAction } from '../../../../../../core/store/language/language.actions';
import {
  getLanguagesByNameSelector,
  getLanguagesNamesSelector,
} from '../../../../../../core/store/language/language.selectors';

@Component({
  selector: 'app-languages-entities-table-page',
  templateUrl: './languages-entities-table-page.component.html',
  styleUrls: ['./languages-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.LANGUAGES',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public languagesNames: string[] = [];

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

  public createLanguage(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.LANGUAGES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateLanguage(name: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.LANGUAGES,
      RoutingConstants.UPDATE,
      name,
    ]);
  }

  public deleteLanguage(name: string): void {
    this.store
      .pipe(
        select(state => getLanguagesByNameSelector(state, { name })),
        takeUntil(this.destroy$),
        take(1),
      )
      .subscribe(languages => {
        languages.forEach(item => this.store.dispatch(deleteLanguageAction({ id: item.id })));
      });
  }

  private initData(): void {
    this.store
      .pipe(select(getLanguagesNamesSelector), takeUntil(this.destroy$))
      .subscribe(names => {
        this.languagesNames = names;
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
            i18nKey: 'BREADCRUMB.LANGUAGES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LANGUAGES}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.ENTITY.LANGUAGES',
        },
      }),
    );
  }
}
