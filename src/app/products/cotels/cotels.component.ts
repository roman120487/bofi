import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-cotels',
  templateUrl: './cotels.component.html',
  styleUrls: ['./cotels.component.css']
})
export class CotelsComponent implements OnInit {

  constructor(private filterService: FilterService, private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
  }

}
