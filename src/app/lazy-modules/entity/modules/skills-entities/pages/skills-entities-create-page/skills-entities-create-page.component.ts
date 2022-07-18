import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { INameId } from '../../../../../../core/interfaces/name-id.interface';
import { getCategoriesSelector } from '../../../../../../core/store/category/categories.selectors';
import { getLevelsSelector } from '../../../../../../core/store/level/levels.selectors';
import { createSkillAction } from '../../../../../../core/store/skill/skills.actions';
import { Name } from '../../../../../../core/interfaces/name.interface';

@Component({
  selector: 'app-skills-entities-create-page',
  templateUrl: './skills-entities-create-page.component.html',
  styleUrls: ['./skills-entities-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsEntitiesCreatePageComponent implements OnInit, OnDestroy {
  private level: INameId;
  private category: INameId;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private route: Router) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(getLevelsSelector), takeUntil(this.destroy$))
      .subscribe((levels) => (this.level = levels[0]));
    this.store
      .pipe(select(getCategoriesSelector), takeUntil(this.destroy$))
      .subscribe((categories) => (this.category = categories[0]));
    this.initPageInfo();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createSkill(name: Name): void {
    this.store.dispatch(
      createSkillAction({
        name: name.name,
        level: this.level.id,
        category: this.category.id,
        lastUsed: 0,
        experience: 0,
      }),
    );
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.ENTITY, RoutingConstants.SKILLS]);
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
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SKILLS}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SKILLS}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.ENTITY.SKILLS',
        },
      }),
    );
  }
}
