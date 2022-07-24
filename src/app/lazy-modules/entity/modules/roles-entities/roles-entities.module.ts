import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesEntitiesTablePageComponent } from './pages/roles-entities-table-page/roles-entities-table-page.component';
import { RolesEntitiesCreatePageComponent } from './pages/roles-entities-create-page/roles-entities-create-page.component';
import { RolesEntitiesUpdatePageComponent } from './pages/roles-entities-update-page/roles-entities-update-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';
import { RolesEntitiesRoutingModule } from './roles-entities-routing.module';

@NgModule({
  declarations: [
    RolesEntitiesTablePageComponent,
    RolesEntitiesCreatePageComponent,
    RolesEntitiesUpdatePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    RolesEntitiesRoutingModule,
  ],
})
export class RolesEntitiesModule {}
