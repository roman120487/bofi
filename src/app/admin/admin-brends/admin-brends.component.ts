import { Component, OnInit } from '@angular/core';
import { IBrend } from 'src/app/shared/interfaces/brend.interface';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


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
  brends: Array<IBrend>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;
  constructor(public firestorage: AngularFireStorage, private firestore: AngularFirestore, private adminServece: AdminService) {
    this.getBrends();
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
    // console.log(this.uploadLogoBrend.urlImage);
    this.logoUrl = this.urlImage;
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


  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.firestorage.ref(`brendsLogo/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.urlImage = url);
      })
    ).subscribe();
  }


  public getBrends() {
    this.firestore.collection('brends').snapshotChanges().subscribe(
      arrayBlogs => {
        this.brends = arrayBlogs.map(brend => {
          return {
            id: brend.payload.doc.id,
            ...brend.payload.doc.data()
          } as IBrend;
        });
        console.log(this.brends);
      }
    );
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record')) {
      this.firestore.doc('brends/' + id).delete();
    }
  }


}
