import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil, switchMap, take } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { updateSpecializationAction } from 'src/app/core/store/specializations/specializations.actions';
import { getSpecializationByIdSelector } from 'src/app/core/store/specializations/specializations.selectors';

@Component({
  selector: 'app-specializations-entities-update-page',
  templateUrl: './specializations-entities-update-page.component.html',
  styleUrls: ['./specializations-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecializationsEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public specialization: INameId;

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
          this.store.pipe(select(state => getSpecializationByIdSelector(state, { id }))),
        ),
      )
      .subscribe(specialization => {
        this.specialization = specialization;
      });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateSpecialization(name: Name): void {
    this.store.dispatch(updateSpecializationAction({ ...name, id: this.specialization.id }));
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SPECIALIZATION,
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
            i18nKey: 'BREADCRUMB.SPECIALIZATIONS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SPECIALIZATION}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SPECIALIZATION}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITIES',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.SPECIALIZATION',
        },
      }),
    );
  }
}
