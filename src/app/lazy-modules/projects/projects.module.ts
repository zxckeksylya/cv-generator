import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { TableModule } from '../../core/components/table/table.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { CommonModule } from '@angular/common';
import { ProjectFormPageComponent } from './pages/project-form-page/project-form-page.component';
import { DatePickerControlModule } from '../../core/components/controls/date-picker-control/date-picker-control.module';
import { AutocompleteControlModule } from '../../core/components/controls/autocomplete-control/autocomplete-control.module';
import { NumberControlModule } from '../../core/components/controls/number-control/number-control.module';
import { TextareaControlModule } from '../../core/components/controls/textarea-control/textarea-control.module';
import { TextControlModule } from '../../core/components/controls/text-control/text-control.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    TableModule,
    ButtonModule,
    AppTranslateModule,
    CommonModule,
    DatePickerControlModule,
    AutocompleteControlModule,
    NumberControlModule,
    TextareaControlModule,
    TextControlModule,
  ],
  declarations: [ProjectsListPageComponent, ProjectFormPageComponent],
})
export class ProjectsModule {}
