import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { TableModule } from '../../core/components/table/table.module';
import { ButtonModule } from '../../core/components/button/button.module';
import { AppTranslateModule } from 'src/app/core/app-translate/app-translate.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ProjectsRoutingModule, TableModule, ButtonModule, AppTranslateModule, CommonModule],
  declarations: [ProjectsListPageComponent],
})
export class ProjectsModule {}
