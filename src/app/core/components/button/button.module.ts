import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [NzButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
