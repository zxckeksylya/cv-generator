import { Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@NgModule({})
export class ThemeStorybookModule {
  constructor(@Inject(DOCUMENT) private documentRef: Document) {}
}
