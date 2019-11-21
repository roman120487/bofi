import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { CallbackService } from 'src/app/shared/services/callback.service';

@Component({
  selector: 'app-hot-pumps',
  templateUrl: './hot-pumps.component.html',
  styleUrls: ['./hot-pumps.component.css']
})
export class HotPumpsComponent implements OnInit {

  constructor(private callbackService: CallbackService, private filterService: FilterService, private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
    // this.callbackService.text = this.productDetails.modalTitle;
  }

}
