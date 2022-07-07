import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @Input() public contentTemplateRef: TemplateRef<any>;
  @Input() public footerTemplateRef: TemplateRef<any>;
  @Input() public titleTemplateRef: TemplateRef<any>;
  @Input() public isVisible = false;

  constructor() {}

  public ngOnInit(): void {}
}
