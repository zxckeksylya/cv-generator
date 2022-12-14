import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AppState } from '../app.reducers';
import { clearAuthorizationStateAction } from '../authorization/authorization.actions';
import { clearBreadcrumbsStateAction } from '../breadcrumb/breadcrumb.actions';
import { clearCategoriesAction } from '../category/categories.actions';
import { clearCVStoreAction } from '../cv/cv.actions';
import { clearEmployeesStoreAction } from '../employess/employees.actions';
import { clearLanguagesAction } from '../language/language.actions';
import { clearLevelsAction } from '../level/levels.actions';
import { clearPageHeadingStateAction } from '../page-heading/page-heading.actions';
import { clearProjectRolesAction } from '../projects-roles/project-roles.actions';
import { clearProjectsStoreAction } from '../projects/projects.actions';
import { clearResponsibilitiesAction } from '../responsibilities/responsibilities.actions';
import { clearRolesAction } from '../role/roles.actions';
import { clearSkillsAction } from '../skill/skills.actions';
import { clearSpecializationsAction } from '../specializations/specializations.actions';
import { clearVirtualCVsAction } from '../virtual-cv/virtual-cv.actions';
import { clearAppStateAction } from './core.actions';

@Injectable()
export class CoreEffects {
  public clearAppState$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(clearAppStateAction),
        tap(() => {
          this.store.dispatch(clearAuthorizationStateAction());
          this.store.dispatch(clearBreadcrumbsStateAction());
          this.store.dispatch(clearPageHeadingStateAction());
          this.store.dispatch(clearSpecializationsAction());
          this.store.dispatch(clearResponsibilitiesAction());
          this.store.dispatch(clearProjectRolesAction());
          this.store.dispatch(clearEmployeesStoreAction());
          this.store.dispatch(clearProjectsStoreAction());
          this.store.dispatch(clearSkillsAction());
          this.store.dispatch(clearRolesAction());
          this.store.dispatch(clearCategoriesAction());
          this.store.dispatch(clearLanguagesAction());
          this.store.dispatch(clearLevelsAction());
          this.store.dispatch(clearCVStoreAction());
          this.store.dispatch(clearVirtualCVsAction());
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
