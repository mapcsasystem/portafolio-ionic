import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioPage } from './portafolio.page';
import { NotFound404Component } from '../shared/components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: '',
    component: PortafolioPage,
  },
  {
    path: '404',
    component: NotFound404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafolioPageRoutingModule {}
