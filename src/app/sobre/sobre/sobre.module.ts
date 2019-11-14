import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { SobrePage } from './sobre.page';
import { SharedModule } from './../../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SobrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
