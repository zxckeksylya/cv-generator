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
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { getCategoriesSelector } from '../../../../../../core/store/category/categories.selectors';
import { RoutingConstants } from '../../../../../../core/constants/routing.constants';
import { deleteCategoryAction } from '../../../../../../core/store/category/categories.actions';

@Component({
  selector: 'app-categories-entities-table-page',
  templateUrl: './categories-entities-table-page.component.html',
  styleUrls: ['./categories-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.CATEGORIES',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public categories: INameId[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createCategory(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.CATEGORIES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateCategory(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.CATEGORIES,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteCategory(id: string): void {
    this.store.dispatch(deleteCategoryAction({ id }));
  }

  private initData(): void {
    this.store
      .pipe(select(getCategoriesSelector), takeUntil(this.destroy$))
      .subscribe((categories) => {
        this.categories = categories;
        this.cdr.markForCheck();
      });
  }
}
