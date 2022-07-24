import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { LevelsEntitiesCreatePageComponent } from './pages/levels-entities-create-page/levels-entities-create-page.component';
import { LevelsEntitiesTablePageComponent } from './pages/levels-entities-table-page/levels-entities-table-page.component';
import { LevelsEntitiesUpdatePageComponent } from './pages/levels-entities-update-page/levels-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: LevelsEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: LevelsEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: LevelsEntitiesUpdatePageComponent,
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
export class LevelsEntitiesRoutingModule {}
