import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exercicio01',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio01/exercicio01.module').then( m => m.Exercicio01PageModule)
  },
  {
    path: 'exercicio02',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio02/exercicio02.module').then( m => m.Exercicio02PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
