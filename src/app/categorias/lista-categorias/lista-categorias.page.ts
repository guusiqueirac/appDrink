import { CategoriaService } from './../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.page.html',
  styleUrls: ['./lista-categorias.page.scss'],
})
export class ListaCategoriasPage implements OnInit {
  categorias: Observable<any[]>;

  constructor(private router: Router,
              private categoriaService: CategoriaService) { }


  ngOnInit() {
    this.categorias = this.categoriaService.getcategoriasAll(null);
  }

  /*getProdutos(categoriaKey: string){
    this.router.navigate(['pedido/carrinho/novo-item/', categoriaKey]);
  }*/

}