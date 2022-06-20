import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TableHeaderItem } from '../../interfaces/table-header-item.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public headerItems: TableHeaderItem[] = [];
  @Input() public rowTemplateRef: TemplateRef<any>;
  @Input() public source: any[] = [];

  constructor(private router: Router) {}
}
