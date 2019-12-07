import { Component, OnInit } from '@angular/core';
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
  modalTitle: string;
  modalImg: string;
  modalSubscribe: string;
  modalType: string;
  modalPower: string;
  modalBrandName: string;
  prod: any;
  checkStatus: boolean = false;

  // tslint:disable-next-line: max-line-length
  date = `${this.dateFull.getDate()}.${this.dateFull.getMonth() + 1}.${this.dateFull.getFullYear()}, ${this.dateFull.getHours()}:${this.dateFull.getMinutes()} `;


  // tslint:disable-next-line: max-line-length
  constructor(private firestore: AngularFirestore) {
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


}

