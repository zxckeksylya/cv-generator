import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { Name } from 'src/app/core/interfaces/name.interface';
import { Language } from '../../../../../../core/interfaces/language.interface';
import { AppState } from '../../../../../../core/store/app.reducers';
import { getLanguagesByNameSelector } from '../../../../../../core/store/language/language.selectors';
import { updateLanguageAction } from '../../../../../../core/store/language/language.actions';
import { RoutingConstants } from '../../../../../../core/constants/routing.constants';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';

@Component({
  selector: 'app-languages-entities-update-page',
  templateUrl: './languages-entities-update-page.component.html',
  styleUrls: ['./languages-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public languages: Language[];

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
        switchMap((params) => params.getAll('name')),
        take(1),
        switchMap((name) =>
          this.store.pipe(select((state) => getLanguagesByNameSelector(state, { name }))),
        ),
      )
      .subscribe((languages) => (this.languages = languages));
    this.initPageInfo();
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateLanguage(name: Name): void {
    this.languages.forEach((item) =>
      this.store.dispatch(
        updateLanguageAction({
          language: {
            id: item.id,
            name: name.name,
            everydayReadingLevel: item.everydayReadingLevel.id,
            everydaySpeakingLevel: item.everydaySpeakingLevel.id,
            everydayWritingLevel: item.everydayWritingLevel.id,
            professionalReadingLevel: item.professionalReadingLevel.id,
            professionalSpeakingLevel: item.professionalSpeakingLevel.id,
            professionalWritingLevel: item.professionalWritingLevel.id,
          },
        }),
      ),
    );
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.LANGUAGES,
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
            i18nKey: 'BREADCRUMB.LANGUAGES',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LANGUAGES}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LANGUAGES}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.LANGUAGES',
        },
      }),
    );
  }
}
