var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Jsonp } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
export var AppService = (function () {
    function AppService(jsonp) {
        this.jsonp = jsonp;
        this.DARK_SKY_KEY = "32ff9593a47c35344e2fb2a29dc7410e";
        this.citySelected = new EventEmitter();
        this.loadChart = new EventEmitter();
    }
    AppService.prototype.setCity = function (city) {
        this.citySelected.emit(city);
    };
    AppService.prototype.generateForecastChart = function (data) {
        this.loadChart.emit(data);
    };
    AppService.prototype.getCities = function (input) {
        var url = 'https://autocomplete.wunderground.com/aq?query=' + input + "&cb=JSONP_CALLBACK";
        return this.jsonp.get(url)
            .map(function (res) { return JSON.parse(res.text()).RESULTS; })
            .catch(this.handleError);
        /*    return this.http.get(url,{headers: this.getHeaders()})
              .map(res => JSON.parse(res.text()).RESULTS)
              .catch(this.handleError);*/
    };
    AppService.prototype.getForecast = function (lat, long, unit, currently) {
        var url = this.buildForecastUrl(lat, long, unit, currently);
        return this.jsonp.get(url)
            .map(function (res) { return JSON.parse(res.text()); })
            .catch(this.handleError);
    };
    AppService.prototype.buildForecastUrl = function (lat, long, unit, currently) {
        var url = 'https://api.darksky.net/forecast/' + this.DARK_SKY_KEY + '/' + lat + ',' + long + '?lang=en&units=' + unit;
        if (currently) {
            url += '&exclude[minutely,hourly,daily,alerts,flags]';
        }
        else {
            url += '&exclude[currently,minutely,hourly,alerts,flags]';
        }
        url += '&callback=JSONP_CALLBACK';
        return url;
    };
    AppService.prototype.handleError = function (error) {
        var err = error.message || 'Server error';
        console.error('Error', error);
        return Observable.throw(err);
    };
    AppService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    AppService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Jsonp])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/app.service.js.map