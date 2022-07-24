import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CollapseComponent],
  imports: [CommonModule, NzCollapseModule, TranslateModule],
  exports: [CollapseComponent],
})
export class CollapseModule {}
