import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { TableModule } from 'src/app/core/components/table/table.module';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';
import { ProjectRolesEntitiesCreatePageComponent } from './pages/project-roles-entities-create-page/project-roles-entities-create-page.component';
import { ProjectRolesEntitiesTablePageComponent } from './pages/project-roles-entities-table-page/project-roles-entities-table-page.component';
import { ProjectRolesEntitiesUpdatePageComponent } from './pages/project-roles-entities-update-page/project-roles-entities-update-page.component';
import { ProjectRolesEntitiesRoutingModule } from './project-roles-entities-routing.module';

@NgModule({
  declarations: [
    ProjectRolesEntitiesUpdatePageComponent,
    ProjectRolesEntitiesTablePageComponent,
    ProjectRolesEntitiesCreatePageComponent,
  ],
  imports: [
    TableModule,
    TranslateModule,
    ButtonModule,
    EntityFormModule,
    CommonModule,
    ProjectRolesEntitiesRoutingModule,
  ],
})
export class ProjectRolesEntitiesModule {}
