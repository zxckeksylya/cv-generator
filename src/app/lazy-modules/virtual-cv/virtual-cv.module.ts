import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualCvRoutingModule } from './virtual-cv-routing.module';
import { VirtualCvTablePageComponent } from './pages/virtual-cv-table-page/virtual-cv-table-page.component';
import { VirtualCvCreatePageComponent } from './pages/virtual-cv-create-page/virtual-cv-create-page.component';
import { VirtualCvUpdatePageComponent } from './pages/virtual-cv-update-page/virtual-cv-update-page.component';
import { ButtonModule } from '../../core/components/button/button.module';
import { TableModule } from '../../core/components/table/table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SelectControlModule } from '../../core/components/controls/select-control/select-control.module';
import { VirtualCvEducationFormComponent } from './components/virtual-cv-education-form/virtual-cv-education-form.component';
import { VirtualCvForeignLanguageFormComponent } from './components/virtual-cv-foreign-language-form/virtual-cv-foreign-language-form.component';
import { VirtualCvGeneralFormComponent } from './components/virtual-cv-general-form/virtual-cv-general-form.component';
import { VirtualCvProjectFormComponent } from './components/virtual-cv-project-form/virtual-cv-project-form.component';
import { VirtualCvResumeFormComponent } from './components/virtual-cv-resume-form/virtual-cv-resume-form.component';
import { VirtualCvNameFormComponent } from './components/virtual-cv-name-form/virtual-cv-name-form.component';
import { VirtualCvSkillFormComponent } from './components/virtual-cv-skill-form/virtual-cv-skill-form.component';
import { VirtualCvSkillsOfTypeFormComponent } from './components/virtual-cv-skills-of-type-form/virtual-cv-skills-of-type-form.component';
import { TextControlModule } from 'src/app/core/components/controls/text-control/text-control.module';
import { NumberControlModule } from 'src/app/core/components/controls/number-control/number-control.module';
import { CollapseModule } from '../../core/components/collapse/collapse.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VirtualCvDataFormComponent } from './components/virtual-cv-data-form/virtual-cv-data-form.component';
import { DatePickerControlModule } from 'src/app/core/components/controls/date-picker-control/date-picker-control.module';

@NgModule({
  declarations: [
    VirtualCvTablePageComponent,
    VirtualCvCreatePageComponent,
    VirtualCvUpdatePageComponent,
    VirtualCvEducationFormComponent,
    VirtualCvForeignLanguageFormComponent,
    VirtualCvGeneralFormComponent,
    VirtualCvProjectFormComponent,
    VirtualCvResumeFormComponent,
    VirtualCvNameFormComponent,
    VirtualCvSkillFormComponent,
    VirtualCvSkillsOfTypeFormComponent,
    VirtualCvDataFormComponent,
  ],
  imports: [
    CommonModule,
    VirtualCvRoutingModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    TranslateModule,
    SelectControlModule,
    TextControlModule,
    NumberControlModule,
    CollapseModule,
    FontAwesomeModule,
    DatePickerControlModule,
  ],
})
export class VirtualCvModule {}
