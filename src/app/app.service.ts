import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Jsonp} from "@angular/http";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {City} from "./model/City";


@Injectable()
export class AppService {

  private DARK_SKY_KEY: string = "32ff9593a47c35344e2fb2a29dc7410e";

  constructor(private jsonp: Jsonp) { }

  citySelected = new EventEmitter<City>();

  setCity(city) {
    this.citySelected.emit(city);
  }

  getCities(input) {
    let url = 'https://autocomplete.wunderground.com/aq?query=' + input + "&cb=JSONP_CALLBACK";
    return this.jsonp.get(url)
      .map(res => JSON.parse(res.text()).RESULTS)
      .catch(this.handleError);

/*    return this.http.get(url,{headers: this.getHeaders()})
      .map(res => JSON.parse(res.text()).RESULTS)
      .catch(this.handleError);*/
  }

  getForecast(lat, long, unit, currently) {
    let url = this.buildForecastUrl(lat, long, unit, currently);
    return this.jsonp.get(url)
      .map(res => JSON.parse(res.text()))
      .catch(this.handleError);
  }

  private buildForecastUrl(lat, long, unit, currently) {
    let url = 'https://api.darksky.net/forecast/' + this.DARK_SKY_KEY + '/' + lat + ',' + long + '?lang=en&units=' + unit;
    if (currently) {
      url += '&exclude[minutely,hourly,daily,alerts,flags]';
    } else {
      url += '&exclude[currently,minutely,hourly,alerts,flags]';
    }
    url += '&callback=JSONP_CALLBACK';

    return url;
  }

  private handleError(error: any) {
    let err = error.message || 'Server error';
    console.error('Error', error);
    return Observable.throw(err);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

}


