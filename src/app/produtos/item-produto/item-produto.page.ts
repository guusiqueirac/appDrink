import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/core/shared/toast.service';
import { ProdutoService } from 'src/app/produtos/shared/produto.service';
import { CarrinhoService } from 'src/app/pedido/carrinho.service';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.page.html',
  styleUrls: ['./item-produto.page.scss'],
})
export class ItemProdutoPage implements OnInit {
  produto: any = {};
  form: FormGroup;
  total: number = 0;
  /*variável para receber a imagem*/
  produtoImg: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private produtosService: ProdutoService,
              private carrinhoService: CarrinhoService,
              private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      const subscribe = this.produtosService.getProduto(key).subscribe( (produto: any ) => {
        subscribe.unsubscribe();
        this.produto = produto;

        /*produtoImg é uma variavel que foi criada para recebeber as informações da variavel 'produto' e informando o caminho do banco*/
        this.produtoImg = produto.img;

        this.form.patchValue({
          produtoKey: produto.key,
          produtoNome: produto.nome,
          produtoDescricao: produto.descricao,
          produtoPreco: produto.preco,
          quantidade: 1,
          img: produto.img
        });

        /*Mostra o total calculado*/
        this.executaCalcularTotal();
      })
    }
  }

  /*Page apenas de um produto, para pegar informações que o cliente escolheu e adicionar ao carrinho*/
  criarFormulario() {
    this.form = this.formBuilder.group({
      produtoKey: [''],
      produtoNome: [''],
      produtoDescricao: [''],
      produtoPreco: [''],
      quantidade: [''],
      observacao: [''],
      total: [''],
      img: ['']
    })
  }

   /*Busca o metodo de calculo e executa*/
   executaCalcularTotal() {
    this.atualizaTotal(this.form.value.quantidade);
  }

  /*Adiciona a quantidade através do botão de " + ", pega a quantidade joga em uma váriavel e manda para o atualizaTotal */
  adicionarQuantidade() {
    let qtd = this.form.value.quantidade;
    qtd++;
    this.atualizaTotal(qtd);
  }

  removerQuantidade() {
    let qtd = this.form.value.quantidade;
    qtd--;
    if(qtd <= 0)
      qtd = 1;

    this.atualizaTotal(qtd);
  }

  /*Receber o preço e a quantidade e efetuar a conta de multiplicação para calcular o total*/
  atualizaTotal(quantidade: number) {
    this.total = this.produto.preco * quantidade;
    this.form.patchValue({ quantidade: quantidade, total: this.total});
  }

  /*Se o valores do formulario estiverem todos preenchidos (validos), ira buscar o metodo inserir no carrinhoService*/
  /*Se deu certo ele irá mostrar a mensagem de que deu certo e volta pra page produtos*/
  onSubmit(){
    if(this.form.valid){
      this.carrinhoService.insert(this.form.value)
      .then( () => {
        this.toast.show('Produto adicionado ao carrinho com sucesso !');
        this.router.navigate(['/tabs/categoria']);
      })
    }
  }

}
