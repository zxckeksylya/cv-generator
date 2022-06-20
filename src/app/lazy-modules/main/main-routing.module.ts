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
