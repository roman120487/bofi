import { Component, OnInit } from '@angular/core';
import { CallbackService } from '../shared/services/callback.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private callbackService: CallbackService) { }

  ngOnInit() {
  }

}
