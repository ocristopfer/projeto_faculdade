import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Irpf2020Component } from './irpf2020.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Irpf2020Component],
  exports: [Irpf2020Component]
})
export class Irpf2020ComponentModule { }