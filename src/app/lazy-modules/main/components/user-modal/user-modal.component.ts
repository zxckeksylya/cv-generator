import { ChangeDetectionStrategy, Component, Input, OnInit, Optional } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { User } from '../../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModalComponent implements OnInit {
  @Input() public user: User | null;

  constructor(@Optional() private modal: NzModalRef) {}

  public ngOnInit(): void {}

  public destroyModal(): void {
    this.modal.destroy();
  }
}
