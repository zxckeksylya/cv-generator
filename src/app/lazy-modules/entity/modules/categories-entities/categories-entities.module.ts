import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'src/app/core/components/table/table.module';
import { ButtonModule } from '../../../../core/components/button/button.module';
import { CategoriesEntitiesRoutingModule } from './categories-entities-routing.module';
import { CategoriesEntitiesCreatePageComponent } from './pages/categories-entities-create-page/categories-entities-create-page.component';
import { CategoriesEntitiesTablePageComponent } from './pages/categories-entities-table-page/categories-entities-table-page.component';
import { CategoriesEntitiesUpdatePageComponent } from './pages/categories-entities-update-page/categories-entities-update-page.component';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';

@NgModule({
  declarations: [
    CategoriesEntitiesTablePageComponent,
    CategoriesEntitiesCreatePageComponent,
    CategoriesEntitiesUpdatePageComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    CategoriesEntitiesRoutingModule,
  ],
})
export class CategoriesEntitiesModule {}
