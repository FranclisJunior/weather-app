import { Component, OnInit } from '@angular/core';

import {AppService} from "../app.service";
import {City} from "../model/City";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  searchFocus: boolean = false;

  city: City = new City();
  cities: City[] = [];

  searchCity() {
    this.appService.getCities(this.city.name)
      .subscribe(
        data => this.cities =  data,
        err => {console.log('Error!', err)}
      );
  }

  selectCity(city) {
    this.city = city;
    this.appService.setCity(this.city);
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
