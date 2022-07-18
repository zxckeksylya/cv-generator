import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { ResponsibilitiesEntitiesCreatePageComponent } from './pages/responsibilities-entities-create-page/responsibilities-entities-create-page.component';
import { ResponsibilitiesEntitiesTablePageComponent } from './pages/responsibilities-entities-table-page/responsibilities-entities-table-page.component';
import { ResponsibilitiesEntitiesUpdatePageComponent } from './pages/responsibilities-entities-update-page/responsibilities-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsibilitiesEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: ResponsibilitiesEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: ResponsibilitiesEntitiesUpdatePageComponent,
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
export class ResponsibilitiesEntitiesRoutingModule {}
