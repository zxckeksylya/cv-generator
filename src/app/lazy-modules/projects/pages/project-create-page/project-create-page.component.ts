import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { AppState } from '../../../../core/store/app.reducers';
import { CreateProject } from '../../../../core/interfaces/project.interface';
import { createProjectAction } from '../../../../core/store/projects/projects.actions';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreatePageComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.initPageInfo();
  }

  public createProject(project: CreateProject): void {
    this.store.dispatch(createProjectAction(project));
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
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.PROJECTS}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.PROJECTS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.PROJECTS',
        },
      }),
    );
  }
}
