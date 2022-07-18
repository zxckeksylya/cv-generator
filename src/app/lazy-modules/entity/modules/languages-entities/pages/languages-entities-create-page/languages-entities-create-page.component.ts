import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { Name } from 'src/app/core/interfaces/name.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { createLanguageAction } from 'src/app/core/store/language/language.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { INameId } from '../../../../../../core/interfaces/name-id.interface';
import { getLevelsSelector } from '../../../../../../core/store/level/levels.selectors';

@Component({
  selector: 'app-languages-entities-create-page',
  templateUrl: './languages-entities-create-page.component.html',
  styleUrls: ['./languages-entities-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesEntitiesCreatePageComponent implements OnInit, OnDestroy {
  private level: INameId;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.store.pipe(select(getLevelsSelector), takeUntil(this.destroy$)).subscribe(levels => {
      this.level = levels[0];
    });
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createLanguage(name: Name): void {
    this.store.dispatch(
      createLanguageAction({
        name: name.name,
        everydayReadingLevel: this.level.id,
        everydaySpeakingLevel: this.level.id,
        everydayWritingLevel: this.level.id,
        professionalReadingLevel: this.level.id,
        professionalSpeakingLevel: this.level.id,
        professionalWritingLevel: this.level.id,
      }),
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
            i18nKey: 'BREADCRUMB.LEVELS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LANGUAGES}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.LANGUAGES}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.ENTITY.LANGUAGES',
        },
      }),
    );
  }
}
