import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ItemCarrinhoPage } from './item-carrinho.page';
import { SharedModule } from './../../core/shared/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ItemCarrinhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemCarrinhoPage]
})
export class ItemCarrinhoPageModule {}
