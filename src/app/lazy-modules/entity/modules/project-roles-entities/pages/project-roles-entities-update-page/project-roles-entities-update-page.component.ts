import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil, switchMap, take } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { updateProjectRoleAction } from 'src/app/core/store/projects-roles/project-roles.actions';
import { getProjectRoleByIdSelector } from 'src/app/core/store/projects-roles/project-roles.selectors';

@Component({
  selector: 'app-project-roles-entities-update-page',
  templateUrl: './project-roles-entities-update-page.component.html',
  styleUrls: ['./project-roles-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRolesEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public projectRole: INameId;

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
        switchMap(id =>
          this.store.pipe(select(state => getProjectRoleByIdSelector(state, { id }))),
        ),
      )
      .subscribe(projectRole => {
        this.projectRole = projectRole;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateProjectRole(name: Name): void {
    this.store.dispatch(updateProjectRoleAction({ ...name, id: this.projectRole.id }));
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.PROJECT_ROLES,
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
            i18nKey: 'BREADCRUMB.ENTITIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}`,
          },
          {
            i18nKey: 'BREADCRUMB.CATEGORIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.PROJECT_ROLES}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.PROJECT_ROLES}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.PROJECT_ROLES',
        },
      }),
    );
  }
}
