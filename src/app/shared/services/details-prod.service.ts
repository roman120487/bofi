import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../interfaces/product.interface';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class DetailsProdService {
  prod: any;
  modalTitle: string;
  modalImg: string;
  modalSubscribe: string;
  modalType: string;
  modalPower: string;
  modalBrandName: string;
  arrProduct: Array<Product>;

  constructor(private firestore: AngularFirestore) {
    this.getProducts();
  }

  showProdDetails(id): any {
    this.prod = this.arrProduct.find(function (val) {
      if (val.id === id) {
        return val;
      }
    });
    this.modalTitle = this.prod.title;
    this.modalImg = this.prod.imgUrl;
    this.modalSubscribe = this.prod.subscribe;
    this.modalType = this.prod.type;
    this.modalPower = this.prod.power;
    this.modalBrandName = this.prod.brandName;
  }

  public getProducts() {
      this.firestore.collection('products').snapshotChanges().subscribe(
        arrayProducts => {
          this.arrProduct = arrayProducts.map(product => {
            return {
              id: product.payload.doc.id,
              ...product.payload.doc.data()
            } as IProduct;
          });
        }
      );
    }
}
