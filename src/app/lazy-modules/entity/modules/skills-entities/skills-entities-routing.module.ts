import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsEntitiesTablePageComponent } from './pages/skills-entities-table-page/skills-entities-table-page.component';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { SkillsEntitiesCreatePageComponent } from './pages/skills-entities-create-page/skills-entities-create-page.component';
import { SkillsEntitiesUpdatePageComponent } from './pages/skills-entities-update-page/skills-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: SkillsEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:name`,
    component: SkillsEntitiesUpdatePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsEntitiesRoutingModule {}
