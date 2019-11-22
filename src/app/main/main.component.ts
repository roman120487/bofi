import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { DetailsProdService } from '../shared/services/details-prod.service';
import { CallbackService } from '../shared/services/callback.service';
import { IProduct } from '../shared/interfaces/product.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../shared/classes/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  randomNum: number;
  // startNum: number;
  finishNum: number;
  arrProduct: Array<Product>;
  // tslint:disable-next-line: max-line-length
  constructor(private firestore: AngularFirestore, private productDetails: DetailsProdService, private callbackService: CallbackService) {
    this.getProducts();
  }

  ngOnInit() {
    console.log(this.arrProduct);
  }

  // random(): void {
  //   console.log(this.arrProduct.length);
  //   this.finishNum = this.randomNum + 4;
  //   this.randomNum = Math.floor((Math.random() * (5 - 0) + 0));
  //   console.log(this.randomNum);
  // }


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

// setTimeout(() => {
//   console.log(this.arrProduct.length);
//   this.finishNum = this.randomNum + 4;
//   this.randomNum = Math.floor((Math.random() * (5 - 0) + 0));
//   console.log(this.randomNum);
// }, 5000);
