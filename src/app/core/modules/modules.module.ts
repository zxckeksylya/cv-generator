import { NgModule } from '@angular/core';
import { AppTranslateModule } from './translate/translate.module';

@NgModule({
  imports: [AppTranslateModule],
  exports: [AppTranslateModule],
})
export class ModulesModule {}
