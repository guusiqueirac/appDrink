import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ItemProdutoPage } from './item-produto.page';
import { SharedModule } from './../../core/shared/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ItemProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemProdutoPage]
})
export class ItemProdutoPageModule {}
