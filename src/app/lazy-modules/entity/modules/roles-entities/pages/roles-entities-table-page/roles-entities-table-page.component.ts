import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { deleteRoleAction } from 'src/app/core/store/role/roles.actions';
import { getRolesSelector } from 'src/app/core/store/role/roles.selectors';
import { INameId } from '../../../../../../core/interfaces/name-id.interface';

@Component({
  selector: 'app-roles-entities-table-page',
  templateUrl: './roles-entities-table-page.component.html',
  styleUrls: ['./roles-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.ROLES',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public roles: INameId[] = [];

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

  public createRole(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.ROLES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateRole(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.ROLES,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteRole(id: string): void {
    this.store.dispatch(deleteRoleAction({ id }));
  }

  private initData(): void {
    this.store.pipe(select(getRolesSelector), takeUntil(this.destroy$)).subscribe((roles) => {
      this.roles = roles;
      this.cdr.markForCheck();
    });
  }
}
