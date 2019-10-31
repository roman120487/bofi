import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminActivate: boolean = false;
  enterAdmin: boolean;
  constructor() { }
}
