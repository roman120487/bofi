import { Component, OnInit } from '@angular/core';
import { UploadLogoBrendService } from '../shared/services/upload-logo-brend.service';
import { IBrend } from '../shared/interfaces/brend.interface';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {
// brends: Array<IBrend>;
  constructor(private uploadLogoBrend: UploadLogoBrendService) {
    // this.brends = this.uploadLogoBrend.brends;
    // console.log(this.uploadLogoBrend.brends);
    
   }

  ngOnInit() {
    console.log(this.uploadLogoBrend.brends);
  }

}
