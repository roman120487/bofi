import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { DetailsProdService } from '../shared/services/details-prod.service';
import { CallbackService } from '../shared/services/callback.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  randomNum: number;
  // startNum: number;
  finishNum: number;
  // tslint:disable-next-line: max-line-length
  constructor(private productService: ProductService, private productDetails: DetailsProdService, private callbackService: CallbackService) {
  }

  ngOnInit() {
    this.random();

  }

  random(): void {
    console.log(this.productService.arrProduct.length);
    this.finishNum = this.randomNum + 4;
    this.randomNum = Math.floor((Math.random() * (5 - 0) + 0));
    console.log(this.randomNum);
  }
}
