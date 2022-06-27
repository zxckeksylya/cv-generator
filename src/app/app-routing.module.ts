import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstants } from './core/constants/routing.constants';
import { AuthorizationGuard } from './core/guards/authorization.guard';
const routes: Routes = [
  {
    path: RoutingConstants.AUTHORIZATION,
    loadChildren: () =>
      import('./lazy-modules/authorization/authorization.module').then(
        (m) => m.AuthorizationModule,
      ),
  },
  {
    path: RoutingConstants.MAIN,
    loadChildren: () => import('./lazy-modules/main/main.module').then((m) => m.MainModule),
    canActivate: [AuthorizationGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
