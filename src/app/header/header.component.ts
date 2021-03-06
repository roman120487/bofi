import { Component, OnInit } from '@angular/core';
import { User } from '../shared/classes/user';
import { AdminService } from '../shared/services/admin.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { IUser } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  emailValid: string;
  passValid: string;
  isEmptyPlace: boolean;
  notValid: boolean;
  trueValid: boolean;
  usernameActive: string;
  arrUsers: Array<User>;
  userName: string;
  userEmail: string;
  userPassword: string;
  menuActive: boolean;
  constructor(public adminServece: AdminService, private firestore: AngularFirestore) {
    this.getUsers();
  }

  ngOnInit() {
  }
  public menuMinActive(): void {
    if (this.menuActive) {
      this.menuActive = false;
    } else {
      this.menuActive = true;
    }
  }

  public resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
    this.emailValid = '';
    this.passValid = '';
  }

  validUser(): any {
    if (this.emailValid === '' && this.passValid === '') {
      this.isEmptyPlace = true;
    } else {
      this.arrUsers.map(val => {
        if (this.emailValid === val.userEmail && this.passValid === val.userPassword) {
          if (this.emailValid === 'admin@bofi.com.ua') {
            this.adminServece.enterAdmin = true;

          }
          this.usernameActive = val.userName;
          this.trueValid = true;

        } else {
        }
      });
    }
    this.resetForm();
  }



  exit(): void {
    this.adminServece.enterAdmin = false;
    this.trueValid = false;
  }

  routeAdmin(): void {
    this.adminServece.adminActivate = true;

  }

  public createNewUser(form: NgForm) {




    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('users').add(data);
    } else {
      this.firestore.doc('users/' + form.value.id).update(data);
    }
    this.resetForm();

  }


  public getUsers() {
    this.firestore.collection('users').snapshotChanges().subscribe(
      arrayBlogs => {
        this.arrUsers = arrayBlogs.map(brend => {
          return {
            id: brend.payload.doc.id,
            ...brend.payload.doc.data()
          } as IUser;
        });
      }
    );
  }

  addUser(): void {

  }
}
