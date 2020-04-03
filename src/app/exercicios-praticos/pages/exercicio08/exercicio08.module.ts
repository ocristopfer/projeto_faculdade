import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio08PageRoutingModule } from './exercicio08-routing.module';

import { Exercicio08Page } from './exercicio08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio08PageRoutingModule
  ],
  declarations: [Exercicio08Page]
})
export class Exercicio08PageModule {}
