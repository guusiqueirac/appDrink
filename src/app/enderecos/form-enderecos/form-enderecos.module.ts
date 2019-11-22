import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormEnderecosPage } from './form-enderecos.page';
import { SharedModule } from './../../core/shared/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: FormEnderecosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormEnderecosPage]
})
export class FormEnderecosPageModule {}
