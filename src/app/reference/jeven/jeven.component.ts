import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeven',
  templateUrl: './jeven.component.html',
  styleUrls: ['./jeven.component.css']
})
export class JevenComponent implements OnInit {
  doc1: boolean;
  doc2: boolean;
  doc3: boolean;
  constructor() { }

  ngOnInit() {
  }

  showDoc(val: string): void {
    console.log(val);
    if (val === 'doc1') {
      this.doc1 = true;
      this.doc2 = false;
      this.doc3 = false;
    } else if (val === 'doc2') {
      this.doc1 = false;
      this.doc2 = true;
      this.doc3 = false;
    } else if (val === 'doc3') {
      this.doc1 = false;
      this.doc2 = false;
      this.doc3 = true;
    }
    console.log(val);
  }



}
