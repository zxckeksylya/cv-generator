import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationPageComponent,
    children: [
      {
        path: RoutingConstants.LOGIN,
        component: SignInPageComponent,
        title: RoutingConstants.LOGIN,
      },
      { path: '**', redirectTo: RoutingConstants.LOGIN },
    ],
  },
  { path: '**', redirectTo: RoutingConstants.LOGIN },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {}
