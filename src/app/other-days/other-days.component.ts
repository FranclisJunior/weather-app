import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import {AppService} from "../app.service";
import {City} from "../model/City";

@Component({
  selector: 'app-other-days',
  templateUrl: './other-days.component.html',
  styleUrls: ['./other-days.component.css']
})
export class OtherDaysComponent implements OnInit {

  loading: boolean = false;

  city: City = null;
  daysForecast: any = null;

  getDaysForecast() {
    this.loading = true;

    this.appService.getForecast(this.city.lat, this.city.lon, 'ca', false)
      .subscribe(
        data => {
          this.daysForecast = [];
          let days =  data.daily.data;
          for (let i = 0; i < 7; i++) {
            let day = {
              date: moment(days[i].time * 1000),
              temperatureMax: days[i].temperatureMax,
              temperatureMin: days[i].temperatureMin,
              icon: 'wi-forecast-io-' + days[i].icon
            };
            this.daysForecast.push(day);
          }
        },
        err => {console.log('Aconteceu um erro!', err)},
        () => {this.loading = false;}
      )
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.citySelected.subscribe(
      (city) => {
        this.city = city;
        this.getDaysForecast();
      }
    );
  }

}
