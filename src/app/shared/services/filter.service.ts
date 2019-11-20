import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../interfaces/product.interface';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  powerVal: string = '';
  typeVal: string = '';

  arrProduct: Array<Product>;

  constructor(private firestore: AngularFirestore) {
    this.getProducts();
  }

  filterPower(val) {
    this.powerVal = val;
  }

  filterType(val) {
    this.typeVal = val;
  }


  public getProducts() {
    this.firestore.collection('products').snapshotChanges().subscribe(
      arrayBlogs => {
        this.arrProduct = arrayBlogs.map(product => {
          return {
            id: product.payload.doc.id,
            ...product.payload.doc.data()
          } as IProduct;
        });
        // console.log(this.arrProduct);
      }
    );
  }
}
