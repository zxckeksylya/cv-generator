import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../../core/components/button/button.module';
import { AutocompleteControlModule } from '../../core/components/controls/autocomplete-control/autocomplete-control.module';
import { DatePickerControlModule } from '../../core/components/controls/date-picker-control/date-picker-control.module';
import { NumberControlModule } from '../../core/components/controls/number-control/number-control.module';
import { SelectControlModule } from '../../core/components/controls/select-control/select-control.module';
import { TextControlModule } from '../../core/components/controls/text-control/text-control.module';
import { TextareaControlModule } from '../../core/components/controls/textarea-control/textarea-control.module';
import { TableModule } from '../../core/components/table/table.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectUpdatePageComponent } from './pages/project-update-page/project-update-page.component';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
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
  ],
  declarations: [
    ProjectsListPageComponent,
    ProjectFormComponent,
    ProjectCreatePageComponent,
    ProjectUpdatePageComponent,
  ],
})
export class ProjectsModule {}
