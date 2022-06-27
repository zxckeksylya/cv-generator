import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import { AppState } from 'src/app/core/store/app.reducers';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListPageComponent implements OnInit {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'LANGUAGES.TITLE',
    },
  ];
  public listOfData: any[] = [
    {
      name: '123',
    },
    {
      name: '23123',
    },
  ];

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
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
}
