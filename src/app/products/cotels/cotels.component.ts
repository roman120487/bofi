import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgClass } from '@angular/common';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';

@Component({
  selector: 'app-cotels',
  templateUrl: './cotels.component.html',
  styleUrls: ['./cotels.component.css']
})
export class CotelsComponent implements OnInit {

  constructor(private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
  }

}
