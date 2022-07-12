import { NgModule } from '@angular/core';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { TableModule } from '../../core/components/table/table.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';
import { EmployeeInfoPageComponent } from './pages/employee-info-page/employee-info-page.component';

@NgModule({
  imports: [EmployeesRoutingModule, TableModule, ButtonModule, AppTranslateModule],
  declarations: [EmployeesListPageComponent, EmployeeFormComponent, EmployeeCreatePageComponent, EmployeeInfoPageComponent],
})
export class EmployeesModule {}
