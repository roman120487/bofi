import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-admin-characteristics',
  templateUrl: './admin-characteristics.component.html',
  styleUrls: ['./admin-characteristics.component.css']
})
export class AdminСharacteristicsComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

}
