import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdutosPedidoPage } from './lista-produtos-pedido.page';
import { SharedModule } from './../../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutosPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutosPedidoPage]
})
export class ListaProdutosPedidoPageModule {}
