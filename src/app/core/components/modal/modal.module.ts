import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, NzModalModule],
  exports: [ModalComponent],
})
export class ModalModule {}
