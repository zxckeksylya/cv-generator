import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import { AppState } from 'src/app/core/store/app.reducers';
import { GetProject } from '../../../../core/interfaces/project.interface';
import { getProjectsAction } from '../../../../core/store/projects/projects.actions';
import { getProjectsSelector } from '../../../../core/store/projects/projects.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListPageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'PROJECTS.NAME',
    },
    {
      i18nKey: 'PROJECTS.SECOND_NAME',
    },
    {
      i18nKey: 'PROJECTS.START_DATE',
    },
    {
      i18nKey: 'PROJECTS.END_DATE',
    },
    {
      i18nKey: 'PROJECTS.TEAM_SIZE',
    },
  ];

  public projects: GetProject[] = [];

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.store.dispatch(getProjectsAction());
    this.store.pipe(select(getProjectsSelector), takeUntil(this.destroy$)).subscribe((projects) => {
      this.projects = projects;
      this.cdr.markForCheck();
    });
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
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.PROJECTS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.PROJECTS',
        },
      }),
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
