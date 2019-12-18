import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminActivate: boolean = false;
  enterAdmin: boolean;
  constructor(private firestore: AngularFirestore) { }


  public getProducts(): any {
    return this.firestore.collection('products').snapshotChanges();
  }

  public saveProduct(id, data): void {
    this.firestore.doc('products/' + id).update(data);
  }

}


