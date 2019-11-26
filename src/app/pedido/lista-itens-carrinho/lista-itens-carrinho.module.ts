import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaItensCarrinhoPage } from './lista-itens-carrinho.page';
import { SharedModule } from './../../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaItensCarrinhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaItensCarrinhoPage]
})
export class ListaItensCarrinhoPageModule {}
