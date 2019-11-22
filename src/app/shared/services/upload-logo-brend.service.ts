import { Injectable } from '@angular/core';
import { IBrend } from 'src/app/shared/interfaces/brend.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadLogoBrendService {
  

  brends: Array<IBrend>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;
  constructor(public firestorage: AngularFireStorage, private firestore: AngularFirestore) {
    this.getBrends();
    console.log(this.brends);
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
