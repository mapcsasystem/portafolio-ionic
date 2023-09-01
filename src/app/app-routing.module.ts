import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './shared/components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
    title: 'Auth',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    title: 'Administración',
  },
  {
    path: 'portafolio',
    loadChildren: () =>
      import('./portafolio/portafolio.module').then(
        (m) => m.PortafolioPageModule
      ),
    title: 'Portafolio',
  },
  {
    path: '404',
    component: NotFound404Component,
  },
  {
    path: '',
    redirectTo: 'portafolio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
