import { EnderecosService } from './../service/enderecos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/shared/alert.service';
import { ToastService } from 'src/app/core/shared/toast.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista-enderecos',
  templateUrl: './lista-enderecos.page.html',
  styleUrls: ['./lista-enderecos.page.scss'],
})
export class ListaEnderecosPage implements OnInit {
  enderecos: Observable<any[]>;
  @Input()
  selecionarEndereco: boolean = false;

  constructor(private enderecoService: EnderecosService,
              private alert: AlertService,
              private toast: ToastService,
              private router: Router,
              private modalController: ModalController) { }

  /*Atraves do Obsavable, o endereco traz todos os endereços que foram cadastrados*/
  ngOnInit() {
    this.enderecos = this.enderecoService.getAll();
  }

  /*Recebo o que tem em endereco e coloca na variável enderecoText e vai concatenando para mostrar em uma linha só*/
  getEnderecoText(endereco: any) {
    let enderecoText: '';
    enderecoText = endereco.logradouro;
    enderecoText += ', ' + endereco.numero;
    if (endereco.complemento) {
        enderecoText += ', ' + endereco.complemento;
      }
    enderecoText += ' - ' + endereco.bairro;
    enderecoText += ' - ' + endereco.cidade;
    enderecoText += ' - ' + endereco.cep;
    console.log(enderecoText);
    return enderecoText;
  }

  /*Selecionar o endereço na hora do pedido*/
  setEnderecoSelecionado(endereco: any) {
    if (this.selecionarEndereco) {
      const enderecoText = this.getEnderecoText(endereco);
      this.modalController.dismiss({ endereco: enderecoText });
    }
  }

  /*Recebe a key do endereço e envia para a rota de editar*/
  editar(key: string) {
    this.router.navigate(['/usuarios/enderecos/editar', key]);
  }

  /*Recebe a key do endereço e abre a janelinha para confirma a remoção ou cancelar*/
  remover(endereco: any) {
    this.alert.ShowConfirmaExclusao(endereco.logradouro + ', ' + endereco.numero, () => {
      this.enderecoService.remove(endereco.key)
        .then( () => {
          this.toast.show('Endereço removido com sucesso !');
        });
    });
  }

}
