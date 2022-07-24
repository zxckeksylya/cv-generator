import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsEntitiesRoutingModule } from './skills-entities-routing.module';
import { SkillsEntitiesCreatePageComponent } from './pages/skills-entities-create-page/skills-entities-create-page.component';
import { SkillsEntitiesUpdatePageComponent } from './pages/skills-entities-update-page/skills-entities-update-page.component';
import { SkillsEntitiesTablePageComponent } from './pages/skills-entities-table-page/skills-entities-table-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';

@NgModule({
  declarations: [
    SkillsEntitiesCreatePageComponent,
    SkillsEntitiesUpdatePageComponent,
    SkillsEntitiesTablePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    SkillsEntitiesRoutingModule,
  ],
})
export class SkillsEntitiesModule {}
