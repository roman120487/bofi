import { Component, OnInit } from '@angular/core';
import { UploadLogoBrendService } from '../shared/services/upload-logo-brend.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor(private uploadLogoBrend: UploadLogoBrendService) { }

  ngOnInit() {
  }

}
