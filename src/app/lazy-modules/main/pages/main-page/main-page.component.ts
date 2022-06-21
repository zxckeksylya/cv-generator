import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { setBreadcrumbsAction } from '../../../../core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from '../../../../core/store/page-heading/page-heading.actions';
import { AppState } from '../../../../core/store/app.reducers';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  public ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbsAction({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.MAIN',
            path: `${RoutingConstants.MAIN}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.MAIN',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.MAIN',
        },
      }),
    );
  }
}
