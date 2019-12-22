import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminActivate: boolean = false;
  enterAdmin: boolean;
  constructor(private firestore: AngularFirestore) { }

}


