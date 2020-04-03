import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio08Page } from './exercicio08.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio08PageRoutingModule {}
