import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICallbackUser } from '../interfaces/callback-user.interface';
import { ProductService } from './product.service';
// import { MaterialModule } from './material.module';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {
  sendBTN: string = "Відправити"
  arrCallbackList: any;
  name: string;
  email: string;
  phone: string;
  text: string;
  dateFull: Date = new Date();
  checkStatus: boolean = false;
  // tslint:disable-next-line: max-line-length
  date = `${this.dateFull.getDate()}.${this.dateFull.getMonth() + 1}.${this.dateFull.getFullYear()}, ${this.dateFull.getHours()}:${this.dateFull.getMinutes()} `;

  constructor(private firestore: AngularFirestore, private productDetails: ProductService) {
    this.getCallbackList();
  }

  order(title): void {
    this.text = title;
  }

  deleteOrder(id): void {
    if (confirm('Are you sure to delete this record')) {
      this.firestore.doc('callbacks/' + id).delete();
    }
  }

  deleteFinishOrders(): void {
    // if (confirm('Ви впевнені щохочете видалити опрацьовані записи')) {
    this.arrCallbackList.forEach(function (val) {
      if (val.checkStatus === true) {
        // val.checkStatus = false;
        this.firestore.doc('callbacks/' + val.id).delete();
      }
    });
    // }
  }


  statusCheckedCallback(user) {
    delete user[user.id];
    if (user.checkStatus === true) {
      user.checkStatus = false;
    } else {
      user.checkStatus = true;
    }

    this.firestore.doc('callbacks/' + user.id).update(user);

  }


  public onSubmit(form: NgForm) {
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
      this.sendBTN = "Відправити"
    }, 2000);
  }


  resetForm(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.text = '';

  }

  public getCallbackList() {
    this.firestore.collection('callbacks').snapshotChanges().subscribe(
      arrayBlogs => {
        this.arrCallbackList = arrayBlogs.map(product => {
          return {
            id: product.payload.doc.id,
            ...product.payload.doc.data()
          } as ICallbackUser;
        });
        // console.log(this.arrCallbackList);
      }
    );
  }
}
