import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbs } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { setPageHeading } from '../../../../core/store/page-heading/page-heading.actions';

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

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
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
      setPageHeading({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.PROJECTS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.PROJECTS',
        },
      }),
    );
  }
}
