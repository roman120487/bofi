import { Component, OnInit } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  emailValid: string;
  passValid: string;
  isEmptyPlace: boolean;
  enterAdmin: boolean;
  arrUsers: Array<User>;
  constructor() {
    this.arrUsers = [
      {
        id: 1,
        name: 'admin',
        password: 'admin',
        email: 'admin'
      }

    ];
  }

  ngOnInit() {
  }

  validUser(): void {
    if (this.emailValid === '' && this.passValid === '') {
      this.isEmptyPlace = true;
    } else if (this.emailValid === this.arrUsers[0].email && this.passValid === this.arrUsers[0].password) {
      this.enterAdmin = true;
    }
  }
}
