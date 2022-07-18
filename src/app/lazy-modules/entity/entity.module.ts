import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ButtonModule } from '../../core/components/button/button.module';
import { TableModule } from '../../core/components/table/table.module';
import { EntityMenuComponent } from './components/entity-menu/entity-menu.component';
import { EntityRoutingModule } from './entity-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, EntityMenuComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    TranslateModule,
    FontAwesomeModule,
    CommonModule,
    TableModule,
    ButtonModule,
    EntityRoutingModule,
  ],
})
export class EntityModule {}
