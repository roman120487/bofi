import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { Product } from 'src/app/shared/classes/product';

@Component({
  selector: 'app-hot-pumps',
  templateUrl: './hot-pumps.component.html',
  styleUrls: ['./hot-pumps.component.css']
})
export class HotPumpsComponent implements OnInit {
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
  prod: any;
  modalTitle: string;
  modalImg: string;
  modalSubscribe: string;
  modalType: string;
  modalPower: string;
  modalBrandName: string;
  powerVal: string = '';
  typeVal: string = '';
  brendVal: string = '';

  soilType: boolean;
  airType: boolean;
  brineType: boolean;
  power105: boolean;
  power22: boolean;
  power362: boolean;

  constructor(private firestore: AngularFirestore) { 
    this.getProducts();
  }

  ngOnInit() {
    // this.callbackService.text = this.productDetails.modalTitle;
  }

  filterPower(val) {
    this.powerVal = val;
  }

  filterType(val) {
    this.typeVal = val;
  }

  filterBrend(val) {
    this.brendVal = val;
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
        this.sendBTN = 'невірний формат e-mail адреси';
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
