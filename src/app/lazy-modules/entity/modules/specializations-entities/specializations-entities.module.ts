import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializationsEntitiesRoutingModule } from './specializations-entities-routing.module';
import { SpecializationsEntitiesTablePageComponent } from './pages/specializations-entities-table-page/specializations-entities-table-page.component';
import { SpecializationsEntitiesCreatePageComponent } from './pages/specializations-entities-create-page/specializations-entities-create-page.component';
import { SpecializationsEntitiesUpdatePageComponent } from './pages/specializations-entities-update-page/specializations-entities-update-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';

@NgModule({
  declarations: [
    SpecializationsEntitiesTablePageComponent,
    SpecializationsEntitiesCreatePageComponent,
    SpecializationsEntitiesUpdatePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    SpecializationsEntitiesRoutingModule,
  ],
})
export class SpecializationsEntitiesModule {}
