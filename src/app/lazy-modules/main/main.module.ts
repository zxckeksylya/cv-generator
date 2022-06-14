import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [MainRoutingModule],
})
export class MainModule {}
