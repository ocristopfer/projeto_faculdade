import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio05PageRoutingModule } from './exercicio05-routing.module';

import { Exercicio05Page } from './exercicio05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio05PageRoutingModule
  ],
  declarations: [Exercicio05Page]
})
export class Exercicio05PageModule {}
