import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  ngOnInit() {
  }
  
}
