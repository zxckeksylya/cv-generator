import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { updateResponsibilityAction } from 'src/app/core/store/responsibilities/responsibilities.actions';
import { getResponsibilityByIdSelector } from 'src/app/core/store/responsibilities/responsibilities.selectors';

@Component({
  selector: 'app-responsibilities-entities-update-page',
  templateUrl: './responsibilities-entities-update-page.component.html',
  styleUrls: ['./responsibilities-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsibilitiesEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public responsibility: INameId;

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
        switchMap(params => params.getAll('id')),
        take(1),
        switchMap(id =>
          this.store.pipe(select(state => getResponsibilityByIdSelector(state, { id }))),
        ),
      )
      .subscribe(responsibility => {
        this.responsibility = responsibility;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateResponsibility(name: Name): void {
    this.store.dispatch(updateResponsibilityAction({ ...name, id: this.responsibility.id }));
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.RESPONSIBILITIES,
    ]);
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
            i18nKey: 'BREADCRUMB.ENTITIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}`,
          },
          {
            i18nKey: 'BREADCRUMB.RESPONSIBILITIES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.RESPONSIBILITIES}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.RESPONSIBILITIES}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.RESPONSIBILITY',
        },
      }),
    );
  }
}
