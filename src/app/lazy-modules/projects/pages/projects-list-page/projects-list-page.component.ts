import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setNewBreadcrumb } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { TableData } from '../../../../core/interfaces/table-data.interface';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListPageComponent implements OnInit {
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
          { name: 'Home', path: `${RoutingConstants.MAIN}`, description: 'Main', section: 'Home' },
          {
            name: 'Projects',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.PROJECTS}`,
            description: 'Project list',
            section: 'Projects',
          },
        ],
      }),
    );
  }
}
