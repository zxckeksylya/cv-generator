import { TemplateRef } from '@angular/core';

export interface TabItem {
  i18nKey: string;
  contentRef: TemplateRef<any>;
}
