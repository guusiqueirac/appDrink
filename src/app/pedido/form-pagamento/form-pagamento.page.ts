import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PedidoService } from '../pedido.service';
import { CarrinhoService } from '../carrinho.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/shared/toast.service';
import { ListaEnderecosPage } from 'src/app/enderecos/lista-enderecos/lista-enderecos.page';


@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.page.html',
  styleUrls: ['./form-pagamento.page.scss'],
})
export class FormPagamentoPage implements OnInit {
  MENSAGEM_ENDERECO_VAZIO: string = 'Porfavor escolha um endereço de entrega';
  form: FormGroup;
  produtos: Observable<any[]>;
  total: number = 0;
  formasPagamento: Array<any> = [
    {valor: PedidoService.TIPO_FORMA_PAGAMENTO.DINHEIRO, descricao: 'Dinheiro'},
    {valor: PedidoService.TIPO_FORMA_PAGAMENTO.CARTAO, descricao: 'Cartão de crédito/débito'}
  ];
  formasEntrega: Array<any> = [
    {valor: PedidoService.TIPO_FORMA_ENTREGA.ENTREGA, descricao: 'Entregar agora'},
    {valor: PedidoService.TIPO_FORMA_ENTREGA.AGENDAR, descricao: 'Agendar entrega'},
    {valor: PedidoService.TIPO_FORMA_ENTREGA.RETIRAR, descricao: 'Retirar pedido'}
  ];

  enderecoSelecionado: string = this.MENSAGEM_ENDERECO_VAZIO;

  constructor(private formBuilder: FormBuilder,
              private carrinhoService: CarrinhoService,
              private modalCtrl: ModalController,
              private pedidoService: PedidoService,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
    this.produtos = this.carrinhoService.getAll();
    const subscribe = this.carrinhoService.getTotalPedido().subscribe( (total: number) => {
      subscribe.unsubscribe();
      this.total = total;
      this.form.patchValue ({ total: total });
    })
  }

  criarFormulario() {
    this.form = this.formBuilder.group ({
      formPagamento: [''],
      trocoPara: [''],
      tipoCartao: [''],
      formEntrega: [''],
      enderecoEntrega: [''],
      total: ['']
    })
  }

  selecionarEndereco() {
    this.modalCtrl.create({
      component: ListaEnderecosPage,
      componentProps: {
        selecionarEndereco: true
      },
      showBackdrop: true,
      backdropDismiss: true
    }).then(modal => {
      modal.onDidDismiss().then(result => {
        if (result) {
          this.enderecoSelecionado = result.data.endereco;
        } else {
          this.enderecoSelecionado = this.MENSAGEM_ENDERECO_VAZIO;
        }
        this.form.patchValue({ enderecoEntrega: this.enderecoSelecionado });
      });
      modal.present();
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.pedidoService.gerarPedido(this.form.value)
        .then( () => {
          this.toast.show('Pedido salvo com sucesso. Aguarde a confirmação.');
          this.router.navigate(['/tabs/categoria']);
        })
        .catch( () => {
          this.toast.show('Erro ao salvar o pedido');
        })
      }
    }

}
