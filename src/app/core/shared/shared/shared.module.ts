import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../valor/valor.component';
import { ListaEnderecosPage } from 'src/app/enderecos/lista-enderecos/lista-enderecos.page';

@NgModule({
  declarations: [ValorComponent, ListaEnderecosPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    ValorComponent,
    ListaEnderecosPage
  ],
  entryComponents: [ValorComponent, ListaEnderecosPage]
})
export class SharedModule { }
