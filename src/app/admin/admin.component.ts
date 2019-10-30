import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
<<<<<<< HEAD
  adminActive: boolean;
  constructor() { }
=======
  // adminActivate: boolean = true;
  constructor(private adminService: AdminService) { }
>>>>>>> 7c6fa25e5277bfee8704994c03b927618bbb3cef

  ngOnInit() {
  }

  exitAdmin(): void{
    this.adminService.adminActivate = false;
  }
}
