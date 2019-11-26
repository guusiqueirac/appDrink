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
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../usuarios/perfil/perfil.module#PerfilPageModule'
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
    path: 'usuarios',
    children: [
      {
        path: 'enderecos',
        loadChildren: '../enderecos/lista-enderecos/lista-enderecos.module#ListaEnderecosPageModule'
      },
      {
        path: 'enderecos/novo',
        loadChildren: '../enderecos/form-enderecos/form-enderecos.module#FormEnderecosPageModule'
      },
      {
        path: 'enderecos/editar/:key',
        loadChildren: '../enderecos/form-enderecos/form-enderecos.module#FormEnderecosPageModule'
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
    path: 'pedido',
    children: [
      {
        path: 'carrinho',
        loadChildren: '../pedido/lista-itens-carrinho/lista-itens-carrinho.module#ListaItensCarrinhoPageModule'
      }
    ]
  },
  {
    path: 'sobre',
    children: [
      {
        path: '',
        loadChildren: '../sobre/sobre/sobre.module#SobrePageModule'
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
