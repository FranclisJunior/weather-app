/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DayForecastChartComponent } from './day-forecast-chart.component';

describe('DayForecastChartComponent', () => {
  let component: DayForecastChartComponent;
  let fixture: ComponentFixture<DayForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayForecastChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayForecastChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
