import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from '../../core/constants/routing.constants';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: RoutingConstants.ROLES,
        loadChildren: () =>
          import('../entity/modules/roles-entities/roles-entities.module').then(
            (m) => m.RolesEntitiesModule,
          ),
        title: RoutingConstants.ROLES,
      },
      {
        path: RoutingConstants.CATEGORIES,
        loadChildren: () =>
          import('../entity/modules/categories-entities/categories-entities.module').then(
            (m) => m.CategoriesEntitiesModule,
          ),
        title: RoutingConstants.CATEGORIES,
      },
      {
        path: RoutingConstants.SPECIALIZATION,
        loadChildren: () =>
          import('../entity/modules/specializations-entities/specializations-entities.module').then(
            (m) => m.SpecializationsEntitiesModule,
          ),
        title: RoutingConstants.SPECIALIZATION,
      },
      {
        path: RoutingConstants.PROJECT_ROLES,
        loadChildren: () =>
          import('../entity/modules/project-roles-entities/project-roles-entities.module').then(
            (m) => m.ProjectRolesEntitiesModule,
          ),
        title: RoutingConstants.PROJECT_ROLES,
      },
      {
        path: RoutingConstants.LEVELS,
        loadChildren: () =>
          import('../entity/modules/levels-entities/levels-entities.module').then(
            (m) => m.LevelsEntitiesModule,
          ),
        title: RoutingConstants.LEVELS,
      },
      {
        path: RoutingConstants.RESPONSIBILITIES,
        loadChildren: () =>
          import(
            '../entity/modules/responsibilities-entities/responsibilities-entities.module'
          ).then((m) => m.ResponsibilitiesEntitiesModule),
        title: RoutingConstants.RESPONSIBILITIES,
      },
      {
        path: RoutingConstants.LANGUAGES,
        loadChildren: () =>
          import('../entity/modules/languages-entities/languages-entities.module').then(
            (m) => m.LanguagesEntitiesModule,
          ),
        title: RoutingConstants.LANGUAGES,
      },
      {
        path: RoutingConstants.SKILLS,
        loadChildren: () =>
          import('../entity/modules/skills-entities/skills-entities.module').then(
            (m) => m.SkillsEntitiesModule,
          ),
        title: RoutingConstants.SKILLS,
      },
      {
        path: '**',
        redirectTo: RoutingConstants.ROLES,
      },
    ],
  },
  {
    path: '**',
    redirectTo: RoutingConstants.ROLES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {}
