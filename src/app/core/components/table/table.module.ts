import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, NzTableModule, TranslateModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
