import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';

@Component({
  selector: 'app-ventilation',
  templateUrl: './ventilation.component.html',
  styleUrls: ['./ventilation.component.css']
})
export class VentilationComponent implements OnInit {

  constructor(private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
  }

}
