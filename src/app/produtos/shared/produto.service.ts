import { CategoriaService } from './../../categorias/shared/categoria.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from 'src/app/core/shared/firebase-path';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase,
              private categoria: CategoriaService) { }

  getAll(categoriaKey: string = null) {
    return this.db.list ( FirebasePath.PRODUTOS, q => {
      if (categoriaKey) {
        return q.orderByChild('categoriaKey').equalTo(categoriaKey);
      } else {
        return q.orderByChild('nome');
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }

  getByKey(key: string){
    /*Contrução do path, o $ serve para concatenar as variaveis com constante*/
    return this.db.list ( FirebasePath.PRODUTOS, q => {
      if (key) {
        return q.orderByChild('categoriaKey').equalTo(key);
      } 
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }


}
