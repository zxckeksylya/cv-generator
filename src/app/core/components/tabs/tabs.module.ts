import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AppTranslateModule } from '../../app-translate/app-translate.module';

@NgModule({
  imports: [CommonModule, NzTabsModule, AppTranslateModule],
  declarations: [TabsComponent],
  exports: [TabsComponent],
})
export class TabsModule {}
