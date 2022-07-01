import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { TableModule } from '../../core/components/table/table.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { CommonModule } from '@angular/common';
import { DatePickerControlModule } from '../../core/components/controls/date-picker-control/date-picker-control.module';
import { AutocompleteControlModule } from '../../core/components/controls/autocomplete-control/autocomplete-control.module';
import { NumberControlModule } from '../../core/components/controls/number-control/number-control.module';
import { TextareaControlModule } from '../../core/components/controls/textarea-control/textarea-control.module';
import { TextControlModule } from '../../core/components/controls/text-control/text-control.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectUpdatePageComponent } from './pages/project-update-page/project-update-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SelectControlModule } from '../../core/components/controls/select-control/select-control.module';

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
