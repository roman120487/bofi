import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICallbackUser } from '../interfaces/callback-user.interface';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {
  arrCallbackList: any;
  name: string;
  email: string;
  phone: string;
  text: string;
  data: string;
  constructor(private firestore: AngularFirestore) { 
    this.getCallbackList();
  }



  public onSubmit(form: NgForm) {

    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('callbacks').add(data);
    } else {
      this.firestore.doc('callbacks/' + form.value.id).update(data);
    }
    console.log(this.arrCallbackList);
    this.resetForm();
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
        console.log(this.arrCallbackList);
      }
    );
  }
}
