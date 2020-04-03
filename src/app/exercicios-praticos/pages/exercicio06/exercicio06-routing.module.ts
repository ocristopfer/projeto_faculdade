import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio06Page } from './exercicio06.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio06PageRoutingModule {}
