var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as moment from 'moment';
import { AppService } from "../app.service";
export var OtherDaysComponent = (function () {
    function OtherDaysComponent(appService) {
        this.appService = appService;
        this.loading = false;
        this.city = null;
        this.daysForecast = null;
    }
    OtherDaysComponent.prototype.getDaysForecast = function () {
        var _this = this;
        this.loading = true;
        this.appService.getForecast(this.city.lat, this.city.lon, 'ca', false)
            .subscribe(function (data) {
            _this.daysForecast = [];
            var days = data.daily.data;
            for (var i = 0; i < 7; i++) {
                var day = {
                    date: moment(days[i].time * 1000),
                    temperatureMax: days[i].temperatureMax,
                    temperatureMin: days[i].temperatureMin,
                    icon: 'wi-forecast-io-' + days[i].icon
                };
                _this.daysForecast.push(day);
            }
        }, function (err) { console.log('Aconteceu um erro!', err); }, function () { _this.loading = false; });
    };
    OtherDaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.citySelected.subscribe(function (city) {
            _this.city = city;
            _this.getDaysForecast();
        });
    };
    OtherDaysComponent = __decorate([
        Component({
            selector: 'app-other-days',
            templateUrl: './other-days.component.html',
            styleUrls: ['./other-days.component.css']
        }), 
        __metadata('design:paramtypes', [AppService])
    ], OtherDaysComponent);
    return OtherDaysComponent;
}());
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/other-days/other-days.component.js.map