import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { DetailsProdService } from 'src/app/shared/services/details-prod.service';
import { CallbackService } from 'src/app/shared/services/callback.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-ventilation',
  templateUrl: './ventilation.component.html',
  styleUrls: ['./ventilation.component.css']
})
export class VentilationComponent implements OnInit {

  constructor(private callbackService: CallbackService, private filterService: FilterService, private prodService: ProductService, private productDetails: DetailsProdService) { }

  ngOnInit() {
    // this.callbackService.text = this.productDetails.modalTitle;
  }
order(): void{
  this.callbackService.text = this.productDetails.modalTitle;
}

}
