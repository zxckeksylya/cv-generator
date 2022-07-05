import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseSelectControl } from '../../../classes/base-control/base-select-control.class';

type Mode = 'multiple' | 'tags' | 'default';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent extends BaseSelectControl {
  @Input() public mode: Mode = 'default';
  @Input() public searchField: string;

  public filteredOptions: any[] = [];

  public filterOptions(value: string): void {
    this.filteredOptions =
      this.dataSource.filter((option) =>
        (option?.[this.searchField] ?? option).toLowerCase().includes(value),
      ) || [];
  }
}
