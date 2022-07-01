import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectUpdatePageComponent } from './pages/project-update-page/project-update-page.component';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { RoutingConstants } from '../../core/constants/routing.constants';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListPageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: ProjectUpdatePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: ProjectCreatePageComponent,
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
export class ProjectsRoutingModule {}
