import { ProdutoService } from './../../produtos/shared/produto.service';
import { CategoriaService } from './../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CarrinhoService } from './../../pedido/carrinho.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.page.html',
  styleUrls: ['./lista-categorias.page.scss'],
})
export class ListaCategoriasPage implements OnInit {
  categorias: Observable<any[]>;
  produtos: Observable<any[]>;
  categoriaSelecionada: string;
  carrinhoPossuiItens: boolean = false;
  bebida: string;

  constructor(private router: Router,
              private categoriaService: CategoriaService,
              private carrinhoService: CarrinhoService) { }


  ngOnInit() {
    this.categorias = this.categoriaService.getcategoriasAll(null);
    /*Ele vai no ouvir(subscribe) se existe algum produto no carrinho,
    se não houver, a variavel "existemItens" será sempre falsa, então ao abrir a page não mostrará o carrinho*/
    this.carrinhoService.carrinhoPossuiItens().subscribe( (existemItens: boolean) => {
      this.carrinhoPossuiItens = existemItens;
    })
  }

  getProduto(categoriaKey: string){
    this.router.navigate(['produtos/lista-produtos/', categoriaKey]);
  }

}
