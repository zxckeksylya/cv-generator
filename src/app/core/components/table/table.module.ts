import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './table.component';
import { AppTranslateModule } from '../../app-translate/app-translate.module';

@NgModule({
  imports: [CommonModule, NzTableModule, AppTranslateModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
