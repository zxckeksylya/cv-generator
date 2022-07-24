import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesEntitiesTablePageComponent } from './pages/languages-entities-table-page/languages-entities-table-page.component';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { LanguagesEntitiesCreatePageComponent } from './pages/languages-entities-create-page/languages-entities-create-page.component';
import { LanguagesEntitiesUpdatePageComponent } from './pages/languages-entities-update-page/languages-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: LanguagesEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: LanguagesEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:name`,
    component: LanguagesEntitiesUpdatePageComponent,
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
export class LanguagesEntitiesRoutingModule {}
