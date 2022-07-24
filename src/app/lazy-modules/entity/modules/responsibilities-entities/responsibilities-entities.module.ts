import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';
import { ResponsibilitiesEntitiesCreatePageComponent } from './pages/responsibilities-entities-create-page/responsibilities-entities-create-page.component';
import { ResponsibilitiesEntitiesTablePageComponent } from './pages/responsibilities-entities-table-page/responsibilities-entities-table-page.component';
import { ResponsibilitiesEntitiesUpdatePageComponent } from './pages/responsibilities-entities-update-page/responsibilities-entities-update-page.component';
import { ResponsibilitiesEntitiesRoutingModule } from './responsibilities-entities-routing.module';

@NgModule({
  declarations: [
    ResponsibilitiesEntitiesTablePageComponent,
    ResponsibilitiesEntitiesUpdatePageComponent,
    ResponsibilitiesEntitiesCreatePageComponent,
  ],
  imports: [
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    CommonModule,
    ResponsibilitiesEntitiesRoutingModule,
  ],
})
export class ResponsibilitiesEntitiesModule {}
