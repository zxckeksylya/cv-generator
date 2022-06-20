import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { TableModule } from '../../core/components/table/table.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';

@NgModule({
  imports: [EmployeesRoutingModule, TableModule, ButtonModule, AppTranslateModule],
  declarations: [EmployeesListPageComponent],
})
export class EmployeesModule {}
