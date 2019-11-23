import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from 'src/app/core/shared/firebase-path';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private db: AngularFireDatabase) { }

  getcategoriasAll(categoriaKey: string = null) {
    return this.db.list( FirebasePath.CATEGORIAS, q => {
      if (categoriaKey) {
        return q.orderByChild('Key').equalTo(categoriaKey);
      } else {
        return q.orderByChild('nome');
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }

}
