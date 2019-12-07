import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ICallbackUser } from '../shared/interfaces/callback-user.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  sendBTN: string = ''
  arrCallbackList: any;
  name: string = '';
  email: string = '';
  phone: string = '';
  text: string = '';
  dateFull: Date = new Date();
  checkStatus: boolean = false;
  // tslint:disable-next-line: max-line-length
  date = `${this.dateFull.getDate()}.${this.dateFull.getMonth() + 1}.${this.dateFull.getFullYear()}, ${this.dateFull.getHours()}:${this.dateFull.getMinutes()} `;

  constructor(private firestore: AngularFirestore) {
    this.getCallbackList();
  }

  ngOnInit() {
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
          this.sendBTN = '';
        }, 2000);
      }
    }

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
