import { Injectable, Optional, Type } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslateService } from '@ngx-translate/core';

export interface ModalOptions {
  i18nHeaderKey: string;
  content: Type<unknown>;
  params: any;
  closable: boolean;
}

@Injectable()
export class ModalService {
  constructor(
    @Optional() private modal: NzModalService,
    private translateService: TranslateService,
  ) {}

  public openModal(modalOptions: ModalOptions): void {
    this.modal.create({
      nzTitle: this.translateService.instant(modalOptions.i18nHeaderKey),
      nzContent: modalOptions.content,
      nzComponentParams: modalOptions.params,
      nzClosable: modalOptions.closable,
      nzFooter: null,
    });
  }
}
