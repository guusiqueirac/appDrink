import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  produto: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;
  carrinhoPossuiItens: boolean = false;
  categoria: string;
  
  constructor(private router: Router,
              private produtosService: ProdutoService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      const subscribe = this.produtosService.getByKey(key).subscribe ( (produtos: any ) => {
        subscribe.unsubscribe();
        this.produto = produtos;
        this.categoria = produtos[0].categoriaNome;
      })
    }  
  }

    /*Buscar produto de uma categoria através de uma key*/
    /*buscarProdutos() {
      this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
    }*/

}
