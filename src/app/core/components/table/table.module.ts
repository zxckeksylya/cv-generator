import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NzTableModule, RouterModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
