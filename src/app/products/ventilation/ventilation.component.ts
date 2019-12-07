import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ventilation',
  templateUrl: './ventilation.component.html',
  styleUrls: ['./ventilation.component.css']
})
export class VentilationComponent implements OnInit {
  dateFull: Date = new Date();
  sendBTN: string = ''
  text: string = '';
  // tslint:disable-next-line: max-line-length
  date = `${this.dateFull.getDate()}.${this.dateFull.getMonth() + 1}.${this.dateFull.getFullYear()}, ${this.dateFull.getHours()}:${this.dateFull.getMinutes()} `;
  checkStatus: boolean = false;
  name: string = '';
  email: string = '';
  phone: string = '';
  // tslint:disable-next-line: max-line-length
  constructor(private firestore: AngularFirestore, private filterService: FilterService, private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
    // this.callbackService.text = this.productDetails.modalTitle;
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
}
