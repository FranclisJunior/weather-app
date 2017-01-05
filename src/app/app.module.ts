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

@NgModule({
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
})
export class AppModule { }
