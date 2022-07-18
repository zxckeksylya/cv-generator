import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { Name } from 'src/app/core/interfaces/name.interface';
import { Skill } from 'src/app/core/interfaces/skill.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { getSkillByNameSelector } from 'src/app/core/store/skill/skills.selectors';
import { updateSkillAction } from '../../../../../../core/store/skill/skills.actions';
import { RoutingConstants } from '../../../../../../core/constants/routing.constants';
import { setBreadcrumbsAction } from '../../../../../../core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from '../../../../../../core/store/page-heading/page-heading.actions';

@Component({
  selector: 'app-skills-entities-update-page',
  templateUrl: './skills-entities-update-page.component.html',
  styleUrls: ['./skills-entities-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsEntitiesUpdatePageComponent implements OnInit, OnDestroy {
  public skills: Skill[];

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
          this.store.pipe(select((state) => getSkillByNameSelector(state, { name }))),
        ),
      )
      .subscribe((skills) => (this.skills = skills));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateSkill(name: Name): void {
    this.skills.forEach((item) =>
      this.store.dispatch(
        updateSkillAction({
          skill: {
            name: name.name,
            id: item.id,
            category: item.category.id,
            level: item.level.id,
            experience: item.experience,
            lastUsed: item.lastUsed,
          },
        }),
      ),
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
            i18nKey: 'BREADCRUMB.SKILLS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SKILLS}`,
          },
          {
            i18nKey: 'BREADCRUMB.UPDATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.ENTITY}/${RoutingConstants.SKILLS}/${RoutingConstants.UPDATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.ENTITY',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.UPDATE.ENTITY.SKILLS',
        },
      }),
    );
  }
}
