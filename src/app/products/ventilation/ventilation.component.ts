import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-ventilation',
  templateUrl: './ventilation.component.html',
  styleUrls: ['./ventilation.component.css']
})
export class VentilationComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  ngOnInit() {
  }

}
