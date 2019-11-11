import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-hot-pumps',
  templateUrl: './hot-pumps.component.html',
  styleUrls: ['./hot-pumps.component.css']
})
export class HotPumpsComponent implements OnInit {

  constructor(private prodService: ProductService) { }

  ngOnInit() {
  }

}
