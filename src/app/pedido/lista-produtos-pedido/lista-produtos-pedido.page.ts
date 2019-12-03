import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-lista-produtos-pedido',
  templateUrl: './lista-produtos-pedido.page.html',
  styleUrls: ['./lista-produtos-pedido.page.scss'],
})
export class ListaProdutosPedidoPage implements OnInit {
  produtos: Observable<any[]>

  constructor(private route: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      this.produtos = this.pedidoService.getAllProdutos(key);
    }
  }

}
