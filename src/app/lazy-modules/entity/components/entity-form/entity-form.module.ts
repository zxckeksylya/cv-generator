import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TextControlModule } from '../../../../core/components/controls/text-control/text-control.module';
import { EntityFormComponent } from './entity-form.component';
import { ButtonModule } from '../../../../core/components/button/button.module';

@NgModule({
  imports: [CommonModule, TextControlModule, ReactiveFormsModule, TranslateModule, ButtonModule],
  declarations: [EntityFormComponent],
  exports: [EntityFormComponent],
})
export class EntityFormModule {}
