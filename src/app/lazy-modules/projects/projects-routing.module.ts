import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { ProjectFormPageComponent } from './pages/project-form-page/project-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListPageComponent,
  },
  {
    path: ':mode/:id',
    component: ProjectFormPageComponent,
  },
  {
    path: ':mode',
    component: ProjectFormPageComponent,
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
