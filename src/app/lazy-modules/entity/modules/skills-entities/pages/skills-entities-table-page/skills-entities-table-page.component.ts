import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { TableHeaderItem } from 'src/app/core/interfaces/table-header-item.interface';
import { Subject, takeUntil, take } from 'rxjs';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducers';
import { RoutingConstants } from '../../../../../../core/constants/routing.constants';
import {
  getSkillByNameSelector,
  getSkillsNamesSelector,
} from '../../../../../../core/store/skill/skills.selectors';
import { deleteSkillAction } from '../../../../../../core/store/skill/skills.actions';

@Component({
  selector: 'app-skills-entities-table-page',
  templateUrl: './skills-entities-table-page.component.html',
  styleUrls: ['./skills-entities-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsEntitiesTablePageComponent implements OnInit, OnDestroy {
  public headerData: TableHeaderItem[] = [
    {
      i18nKey: 'ENTITY.MENU.SKILLS',
    },
    {
      i18nKey: 'BUTTON.EDIT',
    },
    {
      i18nKey: 'BUTTON.REMOVE',
    },
  ];

  public skillsNames: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createSkill(): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SKILLS,
      RoutingConstants.CREATE,
    ]);
  }

  public updateSkill(name: string): void {
    this.route.navigate([
      RoutingConstants.MAIN,
      RoutingConstants.ENTITY,
      RoutingConstants.SKILLS,
      RoutingConstants.UPDATE,
      name,
    ]);
  }

  public deleteSkill(name: string): void {
    this.store
      .pipe(
        select((state) => getSkillByNameSelector(state, { name })),
        takeUntil(this.destroy$),
        take(1),
      )
      .subscribe((skills) => {
        skills.forEach((item) => this.store.dispatch(deleteSkillAction({ id: item.id })));
      });
  }

  public initData(): void {
    this.store.pipe(select(getSkillsNamesSelector), takeUntil(this.destroy$)).subscribe((names) => {
      this.skillsNames = names;
      this.cdr.markForCheck();
    });
  }
}
