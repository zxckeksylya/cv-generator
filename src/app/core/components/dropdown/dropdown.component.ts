import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() public dataSource: any[] = [];
  @Input() public optionValueField!: string;
  @Input() public optionLabelField!: string;
  @Input() public elementId: any;

  @Output()
  public selectItem = new EventEmitter<any>();

  public clicked(item: any): void {
    this.selectItem.emit(item);
  }
}
