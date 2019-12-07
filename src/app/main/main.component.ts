import { Component, OnInit } from '@angular/core';
import { DetailsProdService } from '../shared/services/details-prod.service';
import { IProduct } from '../shared/interfaces/product.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../shared/classes/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  massLength: number;
  // randomNum: number;
  startNum: number;
  finishNum: number;
  arrProduct: Array<Product>;
  arrProduct2: Array<Product>;
  name: string = '';
  email: string = '';
  phone: string = '';
  dateFull: Date = new Date();
  sendBTN: string = '';
  text: string = '';

  // tslint:disable-next-line: max-line-length
  constructor(private firestore: AngularFirestore, private productDetails: DetailsProdService) {
    this.getProducts();

  }

  ngOnInit() {
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
        this.massLength = this.arrProduct.length;
        this.startNum = Math.floor((Math.random() * ((this.massLength - 4) - 0) + 0));
        this.finishNum = this.startNum + 4;
        console.log(this.massLength);
        console.log(this.startNum);
        console.log(this.finishNum);
      }
    );
  }

  order(title): void {
    this.text = title;
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.text = '';

  }

  public onSubmit(form: NgForm) {
    if (this.email === '' || this.name === '' || this.phone === '' || this.text === '') {
      this.sendBTN = 'Ви не заповнили якесь поле';
    } else {
      // tslint:disable-next-line: max-line-length
      const regExpEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
      const regExpPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
      if (regExpEmail.test(this.email) === false) {
        this.sendBTN = 'невірний формат e-mail адреси'
      } else if (regExpPhone.test(this.phone) === false) {
        this.sendBTN = 'невірний формат телефону';
      } else {
        const data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null) {
          this.firestore.collection('callbacks').add(data);
        } else {
          this.firestore.doc('callbacks/' + form.value.id).update(data);
        }
        this.resetForm();
        this.sendBTN = 'Запит відправлено';
        setTimeout(() => {
          this.sendBTN = '';
        }, 2000);
      }
    }


  }


}

// setTimeout(() => {
//   console.log(this.arrProduct.length);
//   this.finishNum = this.randomNum + 4;
//   this.randomNum = Math.floor((Math.random() * (5 - 0) + 0));
//   console.log(this.randomNum);
// }, 5000);
