import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/do';
import * as moment from 'moment';

import {City} from "../model/City";
import {AppService} from "../app.service";

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {


  unitMetrics: string = 'ca';
  searchFocus: boolean = false;
  realTime: any = moment.now();
  loaded: boolean = false;

  city: City = new City();
  cities: City[] = [];
  dayForecast: any = null;

  constructor(private appService: AppService) { }


  searchCity() {
    this.appService.getCities(this.city.name)
     .subscribe(
        data => this.cities =  data,
        err => {console.log('Aconteceu um erro!')}
      );
  }

  selectCity(city) {
    this.loaded = false;
    this.city = city;

    this.appService.selectCity(this.city);

    this.appService.getForecast(this.city.lat, this.city.lon, this.unitMetrics, true)
      .subscribe(
        data => {
          let currently =  data.currently;
          this.dayForecast = {
            day:  moment(currently.time * 1000),
            time: new Date(currently.time * 1000),
            status: currently.summary,
            icon: 'wi-forecast-io-' + currently.icon,
            temp: parseInt(currently.temperature),
            humidity: parseInt(currently.humidity) * 100,
            mind: parseInt(currently.windSpeed),
            isToday: true
          }
        },
        err => {console.log('Aconteceu um erro!', err)},
        () => {this.loaded = true;}
      )
  }

  ngOnInit() {
    setInterval(() => {
      this.realTime = moment.now();
    }, 1000);
  }

}
