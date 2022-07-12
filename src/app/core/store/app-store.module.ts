import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ALertEffects } from './alert/alert.effects';
import { AppEffects } from './app.effects';
import { metaReducers, reducers } from './app.reducers';
import { AuthorizationEffects } from './authorization/authorization.effects';
import { CoreEffects } from './core/core.effects';
import { EmployeesEffect } from './employess/employees.effects';
import { ProjectRolesEffect } from './projects-roles/project-roles.effects';
import { ProjectsEffect } from './projects/projects.effects';
import { ResponsibilitiesEffect } from './responsibilities/responsibilities.effects';
import { RolesEffect } from './role/roles.effects';
import { SkillsEffect } from './skill/skills.effects';
import { SpecializationsEffect } from './specializations/specializations.effects';
import { ThemeEffects } from './theme/theme.effects';
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      AppEffects,
      ThemeEffects,
      AuthorizationEffects,
      ALertEffects,
      CoreEffects,
      SpecializationsEffect,
      ResponsibilitiesEffect,
      ProjectRolesEffect,
      ProjectsEffect,
      EmployeesEffect,
      SkillsEffect,
      RolesEffect,
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [StoreModule, EffectsModule, StoreRouterConnectingModule],
})
export class AppStoreModule {}
