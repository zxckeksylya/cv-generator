import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { TableModule } from '../../core/components/table/table.module';

@NgModule({
  imports: [EmployeesRoutingModule, TableModule],
  declarations: [EmployeesListPageComponent],
})
export class EmployeesModule {}
