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
import * as moment from 'moment';
export var DayForecastChartComponent = (function () {
    function DayForecastChartComponent(appService) {
        this.appService = appService;
    }
    DayForecastChartComponent.prototype.generateChart = function (hours, temps) {
        var options = {
            chart: {
                backgroundColor: 'transparent',
                type: 'line'
            },
            legend: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            yAxis: {
                visible: false,
                allowDecimals: false,
            },
            xAxis: {
                categories: hours,
                labels: {
                    style: {
                        color: '#FFFFFF',
                        fontSize: '15px',
                        fontFamily: 'Montserrat, sans-serif',
                    }
                }
            },
            title: {
                text: '',
                enabled: false
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<b>Temperature:</b> {point.y} °C'
            },
            series: [{
                    data: temps,
                    color: '#FFFFFF',
                    type: 'spline'
                }]
        };
        this.options = new Promise(function (resolve) {
            resolve(options);
        });
    };
    DayForecastChartComponent.prototype.processChartData = function (data) {
        var hours = [];
        var temps = [];
        var count = 0;
        for (var i = 0; i < 13; i++) {
            if (i == 0) {
                count = i;
            }
            else {
                count += 2;
            }
            if (data[count]) {
                hours.push(moment(data[count]['time'] * 1000).format('HH:mm'));
                temps.push(parseInt(data[count]['temperature']));
            }
            else {
                hours.push(moment(data[count]['time'] * 1000).format('HH:mm'));
                temps.push(parseInt(data.slice(-1)[0]['temperature']));
            }
        }
        this.generateChart(hours, temps);
    };
    DayForecastChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.loadChart.subscribe(function (data) {
            _this.processChartData(data);
        });
    };
    DayForecastChartComponent = __decorate([
        Component({
            selector: 'app-day-forecast-chart',
            templateUrl: './day-forecast-chart.component.html',
            styleUrls: ['./day-forecast-chart.component.css']
        }), 
        __metadata('design:paramtypes', [AppService])
    ], DayForecastChartComponent);
    return DayForecastChartComponent;
}());
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/day-forecast-chart/day-forecast-chart.component.js.map