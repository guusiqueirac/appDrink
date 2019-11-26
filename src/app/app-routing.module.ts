import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './usuarios/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: ('./tabs/tabs.module#TabsPageModule'), canActivate: [AuthGuard]
  },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'item-produto', loadChildren: './produtos/item-produto/item-produto.module#ItemProdutoPageModule' },
  { path: 'form-enderecos', loadChildren: './enderecos/form-enderecos/form-enderecos.module#FormEnderecosPageModule' },
  { path: 'lista-enderecos', loadChildren: './enderecos/lista-enderecos/lista-enderecos.module#ListaEnderecosPageModule' },
  { path: 'lista-itens-carrinho', loadChildren: './pedido/lista-itens-carrinho/lista-itens-carrinho.module#ListaItensCarrinhoPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
