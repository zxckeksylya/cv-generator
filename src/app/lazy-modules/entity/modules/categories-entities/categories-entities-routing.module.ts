import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { CategoriesEntitiesCreatePageComponent } from './pages/categories-entities-create-page/categories-entities-create-page.component';
import { CategoriesEntitiesTablePageComponent } from './pages/categories-entities-table-page/categories-entities-table-page.component';
import { CategoriesEntitiesUpdatePageComponent } from './pages/categories-entities-update-page/categories-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: CategoriesEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: CategoriesEntitiesUpdatePageComponent,
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
export class CategoriesEntitiesRoutingModule {}
