import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminActive: boolean;

  // adminActivate: boolean = true;
  constructor(public adminService: AdminService) { }


  ngOnInit() {
  }

  exitAdmin(): void {
    this.adminService.adminActivate = false;
  }
}
