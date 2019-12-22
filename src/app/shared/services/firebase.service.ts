import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getProducts(): any {
    return this.firestore.collection('products').snapshotChanges();
  }

  public saveProduct(id, data): void {
    this.firestore.doc('products/' + id).update(data);
  }
}
