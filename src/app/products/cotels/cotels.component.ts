import { Component, OnInit } from '@angular/core';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { Product } from 'src/app/shared/classes/product';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-cotels',
  templateUrl: './cotels.component.html',
  styleUrls: ['./cotels.component.css']
})
export class CotelsComponent implements OnInit {
  dateFull: Date = new Date();
  sendBTN: string = ''
  text: string = '';
  // tslint:disable-next-line: max-line-length
  date = `${this.dateFull.getDate()}.${this.dateFull.getMonth() + 1}.${this.dateFull.getFullYear()}, ${this.dateFull.getHours()}:${this.dateFull.getMinutes()} `;
  checkStatus: boolean = false;
  name: string = '';
  email: string = '';
  phone: string = '';
  arrProduct: Array<Product>;
  // tslint:disable-next-line: max-line-length
  constructor(public firestorage: AngularFireStorage, private firestore: AngularFirestore, private filterService: FilterService, private productDetails: DetailsProdService) {
    this.getProducts();
  }

  ngOnInit() {
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
      this.sendBTN = "Ви не заповнили якесь поле"
    } else {
      // tslint:disable-next-line: max-line-length
      const regExpEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
      const regExpPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
      if (regExpEmail.test(this.email) === false) {
        this.sendBTN = "невірний формат e-mail адреси"
      } else if (regExpPhone.test(this.phone) === false) {
        this.sendBTN = "невірний формат телефону"
      } else {
        const data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null) {
          this.firestore.collection('callbacks').add(data);
        } else {
          this.firestore.doc('callbacks/' + form.value.id).update(data);
        }
        this.resetForm();
        this.sendBTN = "Запит відправлено"
        setTimeout(() => {
          this.sendBTN = ''
        }, 2000);
      }
    }
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
