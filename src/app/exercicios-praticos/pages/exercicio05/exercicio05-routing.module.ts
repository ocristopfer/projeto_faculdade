import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio05Page } from './exercicio05.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio05PageRoutingModule {}
