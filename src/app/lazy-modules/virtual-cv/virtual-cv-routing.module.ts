import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualCvTablePageComponent } from './pages/virtual-cv-table-page/virtual-cv-table-page.component';
import { RoutingConstants } from '../../core/constants/routing.constants';
import { VirtualCvCreatePageComponent } from './pages/virtual-cv-create-page/virtual-cv-create-page.component';
import { VirtualCvUpdatePageComponent } from './pages/virtual-cv-update-page/virtual-cv-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: VirtualCvTablePageComponent,
  },
  {
    path: RoutingConstants.CREATE,
    component: VirtualCvCreatePageComponent,
  },
  {
    path: `${RoutingConstants.UPDATE}/:id`,
    component: VirtualCvUpdatePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualCvRoutingModule {}
