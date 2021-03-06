import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { IBrend } from '../../shared/interfaces/brend.interface';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {
  brends: Array<IBrend>;

  constructor(public firestorage: AngularFireStorage, private firestore: AngularFirestore) {
    this.getBrends();
  }

  ngOnInit() {
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
      }
    );
  }


}
