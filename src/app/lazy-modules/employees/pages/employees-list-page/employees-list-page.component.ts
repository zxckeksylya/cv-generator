import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbs } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { Store } from '@ngrx/store';
import { TableHeaderItem } from '../../../../core/interfaces/table-header-item.interface';

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
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.HOME',

            path: `${RoutingConstants.MAIN}`,
            description: 'Main',
            section: 'Home',
          },
          {
            i18nKey: 'BREADCRUMB.EMPLOYEES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
            description: 'Employess list',
            section: 'Employess',
          },
        ],
      }),
    );
  }
}
