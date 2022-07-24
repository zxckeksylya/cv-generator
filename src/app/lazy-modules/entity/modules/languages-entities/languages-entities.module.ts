import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';

import { LanguagesEntitiesRoutingModule } from './languages-entities-routing.module';
import { LanguagesEntitiesCreatePageComponent } from './pages/languages-entities-create-page/languages-entities-create-page.component';
import { LanguagesEntitiesTablePageComponent } from './pages/languages-entities-table-page/languages-entities-table-page.component';
import { LanguagesEntitiesUpdatePageComponent } from './pages/languages-entities-update-page/languages-entities-update-page.component';

@NgModule({
  declarations: [
    LanguagesEntitiesTablePageComponent,
    LanguagesEntitiesUpdatePageComponent,
    LanguagesEntitiesCreatePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    LanguagesEntitiesRoutingModule,
  ],
})
export class LanguagesEntitiesModule {}
