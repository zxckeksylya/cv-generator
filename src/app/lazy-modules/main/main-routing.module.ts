import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: `${RoutingConstants.PROJECTS}`,
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule),
        title: RoutingConstants.PROJECTS,
      },
      {
        path: `${RoutingConstants.EMPLOYEES}`,
        loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule),
        title: RoutingConstants.EMPLOYEES,
      },
      {
        path: RoutingConstants.ENTITY,
        loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule),
        title: RoutingConstants.ENTITY,
      },
      {
        path: RoutingConstants.VIRTUAL_CVS,
        loadChildren: () => import('../virtual-cv/virtual-cv.module').then(m => m.VirtualCvModule),
        title: RoutingConstants.VIRTUAL_CVS,
      },
      { path: '**', redirectTo: `${RoutingConstants.EMPLOYEES}` },
    ],
  },
  { path: '**', redirectTo: `${RoutingConstants.EMPLOYEES}` },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
