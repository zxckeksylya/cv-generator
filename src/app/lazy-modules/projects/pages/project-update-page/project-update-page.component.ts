import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { updateProjectAction } from 'src/app/core/store/projects/projects.actions';
import { getProjectByIdSelector } from 'src/app/core/store/projects/projects.selectors';
import { GetProject, UpdateProject } from '../../../../core/interfaces/project.interface';

@Component({
  selector: 'app-project-update-page',
  templateUrl: './project-update-page.component.html',
  styleUrls: ['./project-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectUpdatePageComponent implements OnInit, OnDestroy {
  public updatedProject: GetProject;

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
        switchMap((params) => params.getAll('id')),
        take(1),
        switchMap((id) =>
          this.store.pipe(select((state) => getProjectByIdSelector(state, { id }))),
        ),
      )
      .subscribe((project) => (this.updatedProject = project));

    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateProject(project: UpdateProject): void {
    this.store.dispatch(updateProjectAction({ ...project, id: this.updatedProject.id }));
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.PROJECTS]);
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
            i18nKey: 'BREADCRUMB.PROJECTS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.PROJECTS}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.PROJECTS}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );

    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.PROJECTS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.PROJECTS',
        },
      }),
    );
  }
}
