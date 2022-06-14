import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setNewBreadcrumb } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { Store } from '@ngrx/store';
import { TableData } from '../../../../core/interfaces/table-data.interface';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListPageComponent implements OnInit {
  public listOfData: TableData = {
    paramsOfDataObjects: [
      { title: 'id', property: 'id' },
      { title: 'name', property: 'name' },
    ],
    listOfTableItem: [
      {
        link: '',
        params: {
          id: 1,
          name: 'yagor',
        },
      },
      {
        link: '',
        params: {
          id: 2,
          name: 'pasha',
        },
      },
    ],
  };
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(
      setNewBreadcrumb({
        arrayOfBreadcrumbs: [
          {
            name: 'Home',
            path: `${RoutingConstants.MAIN}`,
            description: 'Main',
            section: 'Home',
          },
          {
            name: 'Employess',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.EMPLOYEES}`,
            description: 'Employess list',
            section: 'Employess',
          },
        ],
      }),
    );
  }
}
