import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListPageComponent } from './pages/projects-list-page/projects-list-page.component';
import { TableModule } from '../../core/components/table/table.module';
import { ButtonModule } from '../../core/components/button/button.module';

@NgModule({
  imports: [ProjectsRoutingModule, TableModule, ButtonModule],
  declarations: [ProjectsListPageComponent],
})
export class ProjectsModule {}
