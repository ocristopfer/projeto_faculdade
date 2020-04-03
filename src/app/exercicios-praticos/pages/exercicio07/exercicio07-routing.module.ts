import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio07Page } from './exercicio07.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio07PageRoutingModule {}
