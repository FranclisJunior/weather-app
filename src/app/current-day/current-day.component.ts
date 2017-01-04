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
  realTime: any = moment.now();
  loading: boolean = false;

  city: City = null;
  dayForecast: any = null;


  getForecast() {
    this.loading = true;

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
            wind: parseInt(currently.windSpeed),
            isToday: true
          }
        },
        err => {console.log('Error', err)},
        () => {this.loading = false;}
      )
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.citySelected.subscribe(
      (city) => {
        this.city = city;
        this.getForecast();
      }
    );

    setInterval(() => {
      this.realTime = moment.now();
    }, 1000);
  }

}
