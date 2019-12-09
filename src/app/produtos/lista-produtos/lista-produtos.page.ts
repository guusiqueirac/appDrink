import { CategoriaService } from 'src/app/categorias/shared/categoria.service';
import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})

export class ListaProdutosPage implements OnInit {
  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;
  carrinhoPossuiItens: boolean = false;
  categoria: string;
  key: string;
  bebida: string;
  filtroSelecionado: string;

  constructor(private router: Router,
              private produtosService: ProdutoService,
              private categoriaService: CategoriaService,
              private route: ActivatedRoute ) { }


  ngOnInit() {
    // this.produtos = this.produtosService.getAll(null);
    let key = this.route.snapshot.paramMap.get('key');

    if (key) {

      const subscribe = this.produtosService.getByCategoria(key).subscribe( (cat: any ) => {
        subscribe.unsubscribe();
         this.categoria = cat[0].categoriaNome;
        console.log(cat);
      })  
      

      this.categorias = this.categoriaService.getcategoriasAll(key);

      this.produtos = this.produtosService.getByCategoria(key);
      //console.log(this.produtos);
    }
  }

  /*Buscar produto de uma categoria através de uma key*/
  buscarProdutos() {
      this.produtos = this.produtosService.getAll(this.filtroSelecionado);
    }

    adicionarProduto(key: string){
    this.router.navigate(['produtos/item-produto/', key]);
  }

  // getBebida() {
  //   this.produtos = this.produtosService.getByCustomers(this.bebida);
  // }

}
