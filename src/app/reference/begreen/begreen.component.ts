import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-begreen',
  templateUrl: './begreen.component.html',
  styleUrls: ['./begreen.component.css']
})
export class BegreenComponent implements OnInit {

  constructor(private firestorage: AngularFireStorage) { }

  ngOnInit() {
  }
  
}
