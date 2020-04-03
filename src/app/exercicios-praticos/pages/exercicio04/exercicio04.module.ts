import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio04PageRoutingModule } from './exercicio04-routing.module';

import { Exercicio04Page } from './exercicio04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio04PageRoutingModule
  ],
  declarations: [Exercicio04Page]
})
export class Exercicio04PageModule {}
