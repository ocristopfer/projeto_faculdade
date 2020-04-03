import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciciosPraticosComponent } from './exercicios-praticos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExerciciosPraticosComponent],
  exports: [ExerciciosPraticosComponent]
})
export class ExerciciosPraticosComponentModule { }



