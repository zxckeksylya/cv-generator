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
import { deleteLevelAction } from 'src/app/core/store/level/levels.actions';
import { getLevelsSelector } from 'src/app/core/store/level/levels.selectors';

@Component({
  selector: 'app-levels-entities-table-page',
  templateUrl: './levels-entities-table-page.component.html',
  styleUrls: ['./levels-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelsEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.LEVELS',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public levels: INameId[] = [];

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

  public createLevel(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.LEVELS,
      RoutingConstants.CREATE,
    ]);
  }

  public updateLevel(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.LEVELS,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteLevel(id: string): void {
    this.store.dispatch(deleteLevelAction({ id }));
  }

  private initData(): void {
    this.store.pipe(select(getLevelsSelector), takeUntil(this.destroy$)).subscribe((levels) => {
      this.levels = levels;
      this.cdr.markForCheck();
    });
  }
}
