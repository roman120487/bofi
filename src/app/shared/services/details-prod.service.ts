import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsProdService {
  prod: any;
  modalTitle: string;
  modalImg: string;
  modalSubscribe: string;
  modalType: string;
  modalPower: string;
  modalBrandName: string;
  constructor(private prodService: ProductService) { }

  showProdDetails(id): any {
    this.prod = this.prodService.arrProduct.find(function (val) {
      if (val.id === id) {
        return val;
      }
    });
    this.modalTitle = this.prod.title;
    this.modalImg =  this.prod.imgUrl;
    this.modalSubscribe =  this.prod.subscribe;
    this.modalType =  this.prod.type;
    this.modalPower =  this.prod.power;
    this.modalBrandName =  this.prod.brandName;
  }
}
