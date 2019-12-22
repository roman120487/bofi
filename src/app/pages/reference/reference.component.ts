import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { IBrend } from '../../shared/interfaces/brend.interface';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  brends: Array<IBrend>;
  titleBrend: string;
  viewReference: any = {};
  constructor(public firestorage: AngularFireStorage, private firestore: AngularFirestore) {
    this.getBrends();
  }

  ngOnInit() {
  }

  public setBrendPDF(val) {
    console.log(val);
    this.viewReference.brend = val;
    this.titleBrend = val;
    console.log(this.viewReference);
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




}
