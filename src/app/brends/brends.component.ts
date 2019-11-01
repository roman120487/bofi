import { Component, OnInit } from '@angular/core';
import { UploadLogoBrendService } from '../shared/services/upload-logo-brend.service';
import { IBrend } from '../shared/interfaces/brend.interface';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {
// brends: Array<IBrend>;
  constructor(private uploadLogoBrend: UploadLogoBrendService, private adminServece: AdminService) {
    // this.brends = this.uploadLogoBrend.brends;
    // console.log(this.uploadLogoBrend.brends);
    
   }

  ngOnInit() {
    // console.log(this.uploadLogoBrend.brends);
  }

 

}
