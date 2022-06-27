import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `${RoutingConstants.PROJECTS}`,
        loadChildren: () => import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: `${RoutingConstants.EMPLOYEES}`,
        loadChildren: () => import('../employees/employees.module').then((m) => m.EmployeesModule),
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
