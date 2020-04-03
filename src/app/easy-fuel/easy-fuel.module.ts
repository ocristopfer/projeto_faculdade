import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyFuelComponent } from './easy-fuel.component';



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EasyFuelComponent],
  exports: [EasyFuelComponent]
})
export class EasyFuelComponentModule { }
