import { Component, OnInit } from '@angular/core';
import { CallbackService } from 'src/app/shared/services/callback.service';
// import { MaterialModule } from './material.module';

@Component({
  selector: 'app-admin-callback',
  templateUrl: './admin-callback.component.html',
  styleUrls: ['./admin-callback.component.css']
})
export class AdminCallbackComponent implements OnInit {

  constructor(private callbackService: CallbackService) { }

  ngOnInit() {
  }

}
