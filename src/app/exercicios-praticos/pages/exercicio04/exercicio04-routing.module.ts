import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio04Page } from './exercicio04.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio04PageRoutingModule {}
