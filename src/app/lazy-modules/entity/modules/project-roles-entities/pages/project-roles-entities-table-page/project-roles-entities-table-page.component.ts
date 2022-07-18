import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { deleteProjectRoleAction } from 'src/app/core/store/projects-roles/project-roles.actions';
import { getProjectRolesSelector } from 'src/app/core/store/projects-roles/project-roles.selectors';

@Component({
  selector: 'app-project-roles-entities-table-page',
  templateUrl: './project-roles-entities-table-page.component.html',
  styleUrls: ['./project-roles-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRolesEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.PROJECT_ROLES',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public projectRoles: INameId[] = [];

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

  public createProjectRole(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.PROJECT_ROLES,
      RoutingConstants.CREATE,
    ]);
  }

  public updateProjectRole(id: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.PROJECT_ROLES,
      RoutingConstants.UPDATE,
      id,
    ]);
  }

  public deleteProjectRole(id: string): void {
    this.store.dispatch(deleteProjectRoleAction({ id }));
  }

  private initData(): void {
    this.store
      .pipe(select(getProjectRolesSelector), takeUntil(this.destroy$))
      .subscribe((projectRoles) => {
        this.projectRoles = projectRoles;
        this.cdr.markForCheck();
      });
  }
}
