import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio07PageRoutingModule } from './exercicio07-routing.module';

import { Exercicio07Page } from './exercicio07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio07PageRoutingModule
  ],
  declarations: [Exercicio07Page]
})
export class Exercicio07PageModule {}
