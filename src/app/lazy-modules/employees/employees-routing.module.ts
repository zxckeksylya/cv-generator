import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { EmployeeInfoPageComponent } from './pages/employee-info-page/employee-info-page.component';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListPageComponent,
  },
  {
    path: `${RoutingConstants.INFO}/:id`,
    component: EmployeeInfoPageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: EmployeeCreatePageComponent,
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
export class EmployeesRoutingModule {}
