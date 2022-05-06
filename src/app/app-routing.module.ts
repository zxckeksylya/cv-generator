import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/authorization' },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./lazy-modules/authorization/authorization.module').then(
        (m) => m.AuthorizationModule,
      ),
  },
  {
    path: 'main',
    loadChildren: () => import('./lazy-modules/main/main.module').then((m) => m.MainModule),
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
