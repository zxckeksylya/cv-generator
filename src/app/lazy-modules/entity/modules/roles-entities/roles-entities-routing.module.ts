import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesEntitiesTablePageComponent } from './pages/roles-entities-table-page/roles-entities-table-page.component';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { RolesEntitiesCreatePageComponent } from './pages/roles-entities-create-page/roles-entities-create-page.component';
import { RolesEntitiesUpdatePageComponent } from './pages/roles-entities-update-page/roles-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: RolesEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: RolesEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: RolesEntitiesUpdatePageComponent,
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
export class RolesEntitiesRoutingModule {}
