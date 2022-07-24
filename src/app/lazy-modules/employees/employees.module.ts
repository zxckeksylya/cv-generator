import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutocompleteControlModule } from 'src/app/core/components/controls/autocomplete-control/autocomplete-control.module';
import { DatePickerControlModule } from 'src/app/core/components/controls/date-picker-control/date-picker-control.module';
import { NumberControlModule } from 'src/app/core/components/controls/number-control/number-control.module';
import { SelectControlModule } from 'src/app/core/components/controls/select-control/select-control.module';
import { TextControlModule } from 'src/app/core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from 'src/app/core/components/controls/textarea-control/textarea-control.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { TableModule } from '../../core/components/table/table.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';
import { EmployeeInfoPageComponent } from './pages/employee-info-page/employee-info-page.component';
import { EmployeesListPageComponent } from './pages/employees-list-page/employees-list-page.component';
import { LanguageFormComponent } from './components/language-form/language-form.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    EmployeesRoutingModule,
    TableModule,
    ButtonModule,
    TranslateModule,
    CommonModule,
    DatePickerControlModule,
    AutocompleteControlModule,
    NumberControlModule,
    TextareaControlModule,
    TextControlModule,
    ReactiveFormsModule,
    SelectControlModule,
    NumberControlModule,
    FontAwesomeModule,
  ],
  declarations: [
    EmployeesListPageComponent,
    EmployeeFormComponent,
    EmployeeCreatePageComponent,
    EmployeeInfoPageComponent,
    LanguageFormComponent,
    SkillFormComponent,
  ],
})
export class EmployeesModule {}
