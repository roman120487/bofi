import { Component, OnInit } from '@angular/core';
import { IBrend } from 'src/app/shared/interfaces/brend.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-brends',
  templateUrl: './admin-brends.component.html',
  styleUrls: ['./admin-brends.component.css']
})
export class AdminBrendsComponent implements OnInit {

  brends: Array<IBrend>;
  brendImage: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;
  constructor(private firestorage: AngularFireStorage) { }

  ngOnInit() {
  }

  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.firestorage.ref(`brendsLogo/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.brendImage = url);
      })
    ).subscribe();

    console.log(this.brends);
    
  }

}
