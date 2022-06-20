import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
