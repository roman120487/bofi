import { Component, OnInit } from '@angular/core';
import { UploadLogoBrendService } from 'src/app/shared/services/upload-logo-brend.service';
import { IBrend } from 'src/app/shared/interfaces/brend.interface';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from 'src/app/shared/services/admin.service';


@Component({
  selector: 'app-admin-brends',
  templateUrl: './admin-brends.component.html',
  styleUrls: ['./admin-brends.component.css']
})
export class AdminBrendsComponent implements OnInit {
  // id: string = '123';
  brend: string;
  link: string;
  text: string;
  title: string;
  logoUrl: string;
  // formData: IBrend;

  constructor(private uploadLogoBrend: UploadLogoBrendService, private firestore: AngularFirestore, private adminServece: AdminService) {
  }

  ngOnInit() {
  }
  public resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
    // this.id = null,
    this.title = '';
    this.text = '';
    this.brend = '';
    this.logoUrl = '';
    this.link = '';

  }

  addBrend(): void {
    console.log(this.uploadLogoBrend.urlImage);
    this.logoUrl = this.uploadLogoBrend.urlImage;
  }

  public onSubmit(form: NgForm) {

    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('brends').add(data);
    } else {
      this.firestore.doc('brends/' + form.value.id).update(data);
    }
    // console.log(this.formData);
    this.resetForm();
  }

}
