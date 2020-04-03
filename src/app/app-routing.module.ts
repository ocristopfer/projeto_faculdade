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
  },
  {
    path: 'exercicio03',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio03/exercicio03.module').then( m => m.Exercicio03PageModule)
  },
  {
    path: 'exercicio04',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio04/exercicio04.module').then( m => m.Exercicio04PageModule)
  },
  {
    path: 'exercicio05',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio05/exercicio05.module').then( m => m.Exercicio05PageModule)
  },
  {
    path: 'exercicio06',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio06/exercicio06.module').then( m => m.Exercicio06PageModule)
  },
  {
    path: 'exercicio07',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio07/exercicio07.module').then( m => m.Exercicio07PageModule)
  },
  {
    path: 'exercicio08',
    loadChildren: () => import('./exercicios-praticos/pages/exercicio08/exercicio08.module').then( m => m.Exercicio08PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
