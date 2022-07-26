import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [CommonModule, NzTabsModule, TranslateModule],
  declarations: [TabsComponent],
  exports: [TabsComponent],
})
export class TabsModule {}
