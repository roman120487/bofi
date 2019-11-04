import { Component, OnInit } from '@angular/core';
import { UploadLogoBrendService } from '../shared/services/upload-logo-brend.service';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {

  constructor(private uploadLogoBrend: UploadLogoBrendService) {}

  ngOnInit() {
  }
}
