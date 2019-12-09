import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.page.html',
  styleUrls: ['./lista-pedido.page.scss'],
})
export class ListaPedidoPage implements OnInit {
  formStatus: Array<any> = [
    {valor: PedidoService.STATUS.CONFIRMADO},
    {valor: PedidoService.STATUS.ENTREGUE},
    {valor: PedidoService.STATUS.ENVIADO},
    {valor: PedidoService.STATUS.SAIU_PARA_ENTREGA},
  ];
  ima

  constructor(private pedidoService: PedidoService) { }
  pedidos: Observable<any[]>

  ngOnInit() {
    this.pedidos = this.pedidoService.getAllAbertos();
  }

  getStatusNome(status: number) {
    return this.pedidoService.getStatusNome(status);
  }

  getFormaPagamentoNome(formaPagamento: number) {
    return this.pedidoService.getFormaPagamentoNome(formaPagamento);
  }

  executarBusca($event: any) {
    if ($event.target.checked) {
      this.pedidos = this.pedidoService.getAll();
    } else {
      this.pedidos = this.pedidoService.getAllAbertos();
    }
  }

}
