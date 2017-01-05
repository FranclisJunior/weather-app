var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { CurrentDayComponent } from './current-day/current-day.component';
import { HeaderComponent } from './header/header.component';
import { OtherDaysComponent } from './other-days/other-days.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { DayForecastChartComponent } from './day-forecast-chart/day-forecast-chart.component';
import { AppService } from "./app.service";
import { SelectTextDirective } from './util/selecttext.directive';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                SearchCityComponent,
                CurrentDayComponent,
                DayForecastChartComponent,
                OtherDaysComponent,
                SelectTextDirective
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                JsonpModule,
                MomentModule,
                ChartModule
            ],
            providers: [AppService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/app.module.js.map