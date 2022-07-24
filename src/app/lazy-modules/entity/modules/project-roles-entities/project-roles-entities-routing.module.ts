import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { ProjectRolesEntitiesCreatePageComponent } from './pages/project-roles-entities-create-page/project-roles-entities-create-page.component';
import { ProjectRolesEntitiesTablePageComponent } from './pages/project-roles-entities-table-page/project-roles-entities-table-page.component';
import { ProjectRolesEntitiesUpdatePageComponent } from './pages/project-roles-entities-update-page/project-roles-entities-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectRolesEntitiesTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: ProjectRolesEntitiesCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: ProjectRolesEntitiesUpdatePageComponent,
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
export class ProjectRolesEntitiesRoutingModule {}
