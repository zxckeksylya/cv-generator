import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TableData } from '../../interfaces/table-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public dataOfTable!: TableData;

  constructor(private router: Router) {}

  public redirectTo(link: string): void {
    this.router.navigate([link]);
  }
}
