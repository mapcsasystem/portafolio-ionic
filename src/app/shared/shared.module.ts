import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsInputComponent } from './components/errors-input/errors-input.component';
import { IonicModule } from '@ionic/angular';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    ErrorsInputComponent,
    HeaderComponent,
    LogoComponent,
    NotFound404Component,
  ],
  exports: [
    ErrorsInputComponent,
    HeaderComponent,
    LogoComponent,
    NotFound404Component,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
