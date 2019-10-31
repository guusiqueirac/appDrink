import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'categoria',
        children: [
          {
            path: '',
            loadChildren: '../categorias/lista-categorias/lista-categorias.module#ListaCategoriasPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/categoria',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'produtos',
    children: [
      {
        path: 'lista-produtos/:key',
        loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
      },
      {
        path: 'item-produto/:key',
        loadChildren: '../produtos/item-produto/item-produto.module#ItemProdutoPageModule'
      }
      ]
    },
  {
    path: '',
    redirectTo: '/tabs/categoria',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
