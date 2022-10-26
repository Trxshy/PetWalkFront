import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumidorPageRoutingModule } from './consumidor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsumidorPage } from './consumidor.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConsumidorPageRoutingModule
  ],
  declarations: [ConsumidorPage]
})
export class ConsumidorPageModule {}
