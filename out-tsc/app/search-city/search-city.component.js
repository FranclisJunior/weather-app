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
import { AppService } from "../app.service";
import { City } from "../model/City";
export var SearchCityComponent = (function () {
    function SearchCityComponent(appService) {
        this.appService = appService;
        this.searchFocus = false;
        this.city = new City();
        this.cities = [];
    }
    SearchCityComponent.prototype.searchCity = function () {
        var _this = this;
        this.appService.getCities(this.city.name)
            .subscribe(function (data) { return _this.cities = data; }, function (err) { console.log('Error!', err); });
    };
    SearchCityComponent.prototype.selectCity = function (city) {
        this.city = city;
        this.appService.setCity(this.city);
    };
    SearchCityComponent.prototype.ngOnInit = function () {
    };
    SearchCityComponent = __decorate([
        Component({
            selector: 'app-search-city',
            templateUrl: './search-city.component.html',
            styleUrls: ['./search-city.component.css']
        }), 
        __metadata('design:paramtypes', [AppService])
    ], SearchCityComponent);
    return SearchCityComponent;
}());
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/search-city/search-city.component.js.map