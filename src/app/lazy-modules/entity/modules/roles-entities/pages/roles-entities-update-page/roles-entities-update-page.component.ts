import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { INameId } from '../../../../../../core/interfaces/name-id.interface';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducers';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Name } from 'src/app/core/interfaces/name.interface';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { updateRoleAction } from 'src/app/core/store/role/roles.actions';
import { getRoleByIdSelector } from 'src/app/core/store/role/roles.selectors';

@Component({
  selector: 'app-roles-entities-update-page',
  templateUrl: './roles-entities-update-page.component.html',
  styleUrls: ['./roles-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public role: INameId;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => params.getAll('id')),
        take(1),
        switchMap(id => this.store.pipe(select(state => getRoleByIdSelector(state, { id })))),
      )
      .subscribe(role => {
        this.role = role;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateRole(name: Name): void {
    this.store.dispatch(updateRoleAction({ ...name, id: this.role.id }));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY, RoutingConstants.ROLES]);
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
            i18nKey: 'BREADCRUMB.ROLES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.ROLES}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.ROLES}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.ROLES',
        },
      }),
    );
  }
}
