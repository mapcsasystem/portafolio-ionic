import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortafolioPageRoutingModule } from './portafolio-routing.module';

import { PortafolioPage } from './portafolio.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PortafolioPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PortafolioPageRoutingModule,
    SharedModule,
  ],
})
export class PortafolioPageModule {}
