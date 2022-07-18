import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { SpecializationsEntitiesCreatePageComponent } from './pages/specializations-entities-create-page/specializations-entities-create-page.component';
import { SpecializationsEntitiesTablePageComponent } from './pages/specializations-entities-table-page/specializations-entities-table-page.component';
import { SpecializationsEntitiesUpdatePageComponent } from './pages/specializations-entities-update-page/specializations-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: SpecializationsEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: SpecializationsEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: SpecializationsEntitiesUpdatePageComponent,
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
export class SpecializationsEntitiesRoutingModule {}
