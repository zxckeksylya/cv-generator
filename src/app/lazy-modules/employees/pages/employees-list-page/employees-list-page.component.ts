import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbs } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { Store } from '@ngrx/store';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';
import { setPageHeading } from 'src/app/core/store/page-heading/page-heading.actions';
import { AppState } from 'src/app/core/store/app.reducers';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListPageComponent implements OnInit {
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
      setBreadcrumbs({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.MAIN',
            path: `${RoutingConstants.MAIN}`,
          },
          {
            i18nKey: 'BREADCRUMB.EMPLOYEES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeading({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.EMPLOYEES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.EMPLOYEES',
        },
      }),
    );
  }
}
