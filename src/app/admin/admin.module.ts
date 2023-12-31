import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

@NgModule({
  declarations: [AdminPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
  ],
})
export class AdminPageModule {}
