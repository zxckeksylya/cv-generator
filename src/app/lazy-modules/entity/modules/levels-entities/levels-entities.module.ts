import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';
import { LevelsEntitiesRoutingModule } from './levels-entities-routing.module';
import { LevelsEntitiesCreatePageComponent } from './pages/levels-entities-create-page/levels-entities-create-page.component';
import { LevelsEntitiesTablePageComponent } from './pages/levels-entities-table-page/levels-entities-table-page.component';
import { LevelsEntitiesUpdatePageComponent } from './pages/levels-entities-update-page/levels-entities-update-page.component';

@NgModule({
  declarations: [
    LevelsEntitiesCreatePageComponent,
    LevelsEntitiesUpdatePageComponent,
    LevelsEntitiesTablePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    LevelsEntitiesRoutingModule,
  ],
})
export class LevelsEntitiesModule {}
