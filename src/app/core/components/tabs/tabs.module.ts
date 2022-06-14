import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  imports: [CommonModule, NzTabsModule],
  declarations: [TabsComponent],
  exports: [TabsComponent],
})
export class TabsModule {}
