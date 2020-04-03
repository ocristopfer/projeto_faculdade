import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio06PageRoutingModule } from './exercicio06-routing.module';

import { Exercicio06Page } from './exercicio06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio06PageRoutingModule
  ],
  declarations: [Exercicio06Page]
})
export class Exercicio06PageModule {}
