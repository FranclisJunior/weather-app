import { Component, OnInit } from '@angular/core';

import {AppService} from "../app.service";


import * as moment from 'moment';

@Component({
  selector: 'app-day-forecast-chart',
  templateUrl: './day-forecast-chart.component.html',
  styleUrls: ['./day-forecast-chart.component.css']
})
export class DayForecastChartComponent implements OnInit {

  options: Promise<any>;

  constructor(private appService: AppService) {
  }

  generateChart(hours, temps) {
    let options = {
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
            fontSize:'15px',
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

    this.options = new Promise((resolve) => {
      resolve(options)
    });
  }


  processChartData(data) {
    let hours = [];
    let temps = [];

    let count = 0;
    for ( let i = 0; i < 13; i++ ) {
      if ( i == 0 ) { count = i;}
      else { count += 2;}

      if (data[count]) {
        hours.push(moment(data[count]['time'] * 1000).format('HH:mm'));
        temps.push(parseInt( data[count]['temperature']));
      } else {
        hours.push(moment(data[count]['time'] * 1000).format('HH:mm'));
        temps.push(parseInt( data.slice(-1)[0]['temperature']));
      }
    }

    this.generateChart(hours, temps);
  }

  ngOnInit() {
    this.appService.loadChart.subscribe(
      (data) => {
        this.processChartData(data);
      }
    );
  }

}
